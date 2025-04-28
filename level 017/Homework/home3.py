numbers = [1,3,4,5,23,24,6,7,1,23,-1,-4,-3,-4,-6]

def uaryofiti():
    uaryofitadzeebi = []
    for i in numbers:
        if i < 0:
            uaryofitadzeebi.append(i)
    return(uaryofitadzeebi)

print(uaryofiti())
            