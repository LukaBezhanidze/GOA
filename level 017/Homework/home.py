test_numbers = [1,2,3,4,5,6,7,8,9,10]

def kvadratadze():
    listadze = []
    for i in (test_numbers):
        num = i*i
        listadze.append(num)
    return(listadze)

print(kvadratadze())