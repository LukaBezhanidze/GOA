produqtebi = []


for i in range(5):
    produqti = input("produqti: ")
    produqtebi.append(produqti)

produqtebi.pop(4)
produqtebi.pop(0)

print("ganaxlebuli produqtebis sia", produqtebi)