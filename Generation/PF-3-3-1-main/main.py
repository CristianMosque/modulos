

numeros = [1,2,3,4,5]

def addmultiplenumbers(numeros):
  total=0
  for numero in numeros:
    total += numero
  return total

def multiplymultiplenumbers(numeros):
  total=1
  for numero in numeros:
    total *= numero
  return total

def isiteven(numero):
  if numero % 2 == 0:
    return True
  else:
    return False

def isitaninteger(numero):
  if isinstance(numero, int):
    return True
  else:
    return False


