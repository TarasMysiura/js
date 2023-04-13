a = float(input("Введіть число a: "))
action = input("Введіть дію: ")
b = float(input("Введіть число b: "))
print()

if (action == "+"):
  print("Сума чисел рівна " + str(a + b))
elif (action == "-"):
  print("Різниця чисел рівна " + str(a - b))
elif (action == "*"):
  print("Добуток чисел рівний " + str(a * b))
elif (action == "/"):
  print("Частка чисел рівна " + str(a / b))
else:
  print('не правильна дія')
