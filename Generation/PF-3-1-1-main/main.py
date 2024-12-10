#
num = int(input("Digita el primer numero: "))
num2 = int(input("Digita el segundo numero: "))

suma = num + num2
resta = num - num2

#mod = num % num2


print(f"El resultado de la suma es {suma}")
print(f"El resultado de la resta es {resta}")

if (num2==0) :
    print(f"operacion invalidad digitaste un 0")
else:
    div = num / num2
    print(f"El resultado de la division es {div}")


#print(f"El resultado de la resta es {mod}")

seleccion = input("seleccione una opcion * - + / ")

if seleccion == "*":
    print(f"multiplicacion {num*num2}")
elif seleccion == "-":
    print(f"resta {num-num2}")
elif seleccion == "+":
    print(f"suma {num*num2}")
elif seleccion == "/":
    if (num2==0) :
        print(f"indeterminacion digitaste un 0 en el denominador")
    else:
        print(f"division {num / num2}")
else:
    print("Tu seleccion no es valida")
