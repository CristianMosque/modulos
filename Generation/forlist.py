
nombres = ["paula","maria","josefa"]

for i in nombres:
    print(f"la variable dice: {i}")

for i in range(1, 1001):
    if i % 3==0 and i%5==0:
        print("FizzBuzz")
    elif i % 3==0 :
        print("Fizz")
    elif i % 5==0 :
        print("Buzz")
    else:
        print(i)
