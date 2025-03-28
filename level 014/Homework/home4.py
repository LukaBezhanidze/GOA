namez = []

for i in range(5):
    saxeli = input("sheikvanet saxeli: ")
    namez.append(saxeli)


for i in range(5):
    if len(namez[i]) > 5:
        print(namez[i], " name has more than 5 letters")