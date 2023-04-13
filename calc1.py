a = float(input("Введіть число a: "))
action = input("Введіть дію: ")
b = float(input("Введіть число b: "))

if (action == "+"):
  print("Сума чисел " + str(a + b))
elif (action == "-"):
  print("Різниця чисел " + str(a - b))
elif (action == "*"):
  print("Добуток чисел " + str(a * b))
elif (action == "/"):
  print("Частка чисел " + str(a / b))
elif (action == "^"):
  print("Піднесення до степеня чисел " + str(a ** b))
else:
  print("Не правильна дія")
