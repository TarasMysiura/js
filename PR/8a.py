
# На скільки років потрібно покласти в банк суму have,
# щоб отримати суму want, якщо банк нараховує 25 % річних? Вивести
# на екран значення суми кожного року і загальну кількість років.

have = int(input("Скільки коштів ви маєте "))
v = int(input("Відсоткова ставка "))
want = int(input("Скільки коштів ви хочете мати " ))
n = 0

while have <= want:
    have = round((have + have * v / 100), 2)
    print(have)
    n += 1
    # n = n + 1
    # have += have*v/100
print("Загальна кількість років:", n)