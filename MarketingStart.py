import gspread
from oauth2client.service_account import ServiceAccountCredentials
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib
from datetime import datetime

# Función para cargar una plantilla HTML desde un archivo
def cargar_plantilla(ruta_archivo):
    with open(ruta_archivo, 'r', encoding='utf-8') as file:
        return file.read()

# Configurar el acceso a Google Sheets
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name('credencialesgoogle.json', scope)
client = gspread.authorize(creds)

# Abrir la hoja de cálculo
sheet = client.open("prueba_marketing").sheet1

# Obtener todos los correos electrónicos desde la columna B (ajusta según corresponda)
correos = sheet.col_values(2)

# Configuración del correo
contrasena = "ximupxxjnetrtsik"

# Limitar el envío a 450 correos
max_envios = 450
contador_envios = 0

# Listas para almacenar las actualizaciones
interacciones = []
campanas = []

# Enviar correos a cada dirección en la lista, hasta un máximo de 450
for i, correo in enumerate(correos):
    if contador_envios >= max_envios:
        print("Se ha alcanzado el límite de envíos.")
        break
    
    MSG = MIMEMultipart()
    MSG['From'] = "startiotpro@gmail.com"
    MSG['To'] = correo
    MSG['Subject'] = "Potencia tu seguridad en el BLACK FRIDAY"

    # Cargar la plantilla HTML que deseas usar
    mensaje_html = cargar_plantilla('MarketingStart/BlackFriday.html')

    # Agregar el cuerpo del correo al objeto
    MSG.attach(MIMEText(mensaje_html, 'html'))

    try:
        # Establecer la conexión con el servidor de Gmail
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(MSG['From'], contrasena)
        server.sendmail(MSG['From'], MSG['To'], MSG.as_string())
        server.quit()
        
        print(f"Mensaje enviado a {correo}")
        
        # Incrementar el contador de envíos
        contador_envios += 1
        
        # Obtener los valores actuales para Interacción y Campaña
        interaccion_actual = sheet.cell(i + 1, 9).value or ''  # Columna I para Interacción (ajusta si es necesario)
        campana_actual = sheet.cell(i + 1, 10).value or ''      # Columna J para Campaña (ajusta si es necesario)
        
        # Crear nuevo valor para Interacción y Campaña
        fecha_actual = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # Concatenar nuevo valor a Interacción sin sobrescribir lo existente
        nuevo_interaccion = f"{interaccion_actual}\nCorreo enviado: {MSG['Subject']} - {fecha_actual} - Campaña: Atracción".strip()
        
        # Solo añadir "Atracción" si no está ya presente en Campaña
        if "Atracción" not in campana_actual:
            nuevo_campana = f"{campana_actual}, Atracción".strip()
        else:
            nuevo_campana = campana_actual.strip()

        # Agregar a las listas para actualización masiva después
        interacciones.append((i + 1, nuevo_interaccion))
        campanas.append((i + 1, nuevo_campana))

    except Exception as e:
        print(f"Error al enviar correo a {correo}: {e}")

# Actualizar Google Sheets en bloque al final del proceso
if interacciones or campanas:
    cell_updates_interacciones = []
    cell_updates_campanas = []
    
    for row_num, value in interacciones:
        cell_updates_interacciones.append({'range': f'I{row_num}', 'values': [[value]]})  # Columna I para Interacción

    for row_num, value in campanas:
        cell_updates_campanas.append({'range': f'J{row_num}', 'values': [[value]]})  # Columna J para Campaña

    if cell_updates_interacciones:
        body_interacciones = {'data': cell_updates_interacciones}
        sheet.batch_update(body_interacciones)

    if cell_updates_campanas:
        body_campanas = {'data': cell_updates_campanas}
        sheet.batch_update(body_campanas)

print("Actualización completa, se enviaron: ", contador_envios)