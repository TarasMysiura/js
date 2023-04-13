a = float(input("Введіть число a: "))
action = input("Введіть дію: ")
b = float(input("Введіть число b: "))
print()
if (action == "+"):
  print("Сума чисел дорівнює " + str(a + b))
elif (action == "-"):
  print("Різниця чисел дорівнює " + str(a - b))
elif (action == "*"):
  print("Добуток чисел дорівнює " + str(a * b))
elif (action == "/"):
  print("Частка чисел дорівнює " + str(a / b))
else:
  print("Не правильна дія")
