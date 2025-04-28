import random

a = 0
b = 20



user_input = int(input("sheikvanet cifri "))
sigma = random.randint(a, b)
print(sigma)

while user_input != sigma:
    print(sigma)
    user_input = int(input("sheikvanet cifri tavidan "))


print("you got it right")

