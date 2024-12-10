import json
import requests

def trivia_fetch(num):
  response = requests.get(f"http://numbersapi.com/{num}?json")
  if  response.status_code == 200:
    return response.json()
  else:
    return ("Error al conectar con la API.")
 
def main():
  print("Bienvenido a la trivia")
  num =int(input("DIGITA UN NUMERO"))
  trivia = trivia_fetch(num)
  print("el numero: ", num, f"tiene la trivia:{trivia['text']}" )

if __name__=="__main__":
  main()
  
  