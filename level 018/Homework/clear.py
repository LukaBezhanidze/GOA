def qimwmenda(list = [1,2,3,4,5,6,7,8]):
    for i in range(len(list)):
        list.pop(i)
    return(list)
    

print(qimwmenda())