

  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
  ]; 
  const ordinales = [
    null, "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th",
    "th", "th", "th", "th", "th", "th", "th", "th", "th", "st", "nd",
    "rd", "th", "th", "th", "th", "th", "th", "th", "st"
  ];
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  
  function obtenerFecha() {
    const fechaActual = new Date(); // Corrección: instancia un nuevo objeto Date
    const diaSemana = fechaActual.getDay(); // Día de la semana (0-6)
    const diaMes = fechaActual.getDate(); // Día del mes (1-31)
    const mesActual = fechaActual.getMonth(); // Mes (0-11)
    const añoActual = fechaActual.getFullYear(); // Año completo (e.g., 2024)
    return (
      dias[diaSemana] + " " + diaMes + (ordinales[diaMes] || "th") + " " +
      meses[mesActual] + " " + añoActual
    );
  }
  
  function imprimirFecha() {
    console.log("Hoy es " + obtenerFecha());
  }
  
  // Llamada para probar
  imprimirFecha();
  