#####print("wsup")




user_input = int(input("sheikvanet cifri    "))
user_input1 = int(input("sheikvanet meore cifri"))
user_input2 = int(input("sheikvanet mesame cifri"))
user_input3 = int(input("sheikvanet meotxe cifri"))
user_input4 = int(input("sheikvanet mexute cifri"))

numbers = (user_input, user_input1, user_input2,user_input3,user_input4)

average = sum(numbers) / (len(numbers))

print(average)

