sigma = []


for i in range(10):
    number = int(input("sheikvanet cifri: "))
    sigma.append(number)

for number in sigma:
        if number % 2 == 0:
            print("number is even")
else:
    print("number is odDD")

print(sigma)