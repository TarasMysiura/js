a = int(input("Введіть число a: "))
action = input("Введіть дію ")
b = int(input("Введіть число b: "))

if (action == "+"):
  print("Сума чисел рівна " + str(a + b))
elif (action == "-"):
   print("Різниця чисел рівна " + str(a - b))
elif (action == "/"):
  print("Частка чисел рівна " + str(a / b))
elif (action == "*"):
  print("Добуток чисел рівна " + str(a * b))
else:
  print("Неправильна дія")
