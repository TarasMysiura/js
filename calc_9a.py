a = float(input("Введіть число a: "))
action = input("Введіть дію: ")
b = float(input("Введіть число b: "))
print()

# match action:
#     case "+":
#       print("Сума чисел дорівнює " + str(a + b))
#     case "-":
#       print("Різниця чисел дорівнює " + str(a - b))
#     case "*":
#       print("Добуток чисел дорівнює " + str(a * b))

#     case "/":
#       print("Частка чисел дорівнює " + str(a / b))
        
#     case default:
#       print("Не правильна дія")

rez = ("Сума чисел дорівнює " + \
    str(a + b)) if (action == "+") else "Не правильна дія"

print(rez)

