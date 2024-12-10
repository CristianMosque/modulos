import json
import requests

response = requests.get("http://numbersapi.com/42?json")
trivia= json.loads(response.content)

print(trivia)
print(json.dumps(trivia, indent=4))

print(type(trivia))
print(f"trivia {trivia['text']}")
print(f"trivia {trivia['number']}")

import json
import requests
#response = requests.get("http://numbersapi.com/42?json")
#response = requests.get("http://numbersapi.com/5/math?json")
response = requests.get("http://numbersapi.com/12/28/date?json")
trivia = json.loads(response.content)
print(trivia)
print(json.dumps(trivia, indent=4))
print(type(trivia))
print(f"Trivia: {trivia['text']}")
print(f"Number: {trivia['number']}")
url = "https://catfact.ninja/fact"
response = requests.get(url)
if response.status_code == 200:
    data = response.json()
    print(f"Curiosidad sobre gatos: {data['fact']}")
else:
    print("Error al conectar con la API.")