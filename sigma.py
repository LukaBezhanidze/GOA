def homework():
    login = "sigmaboy123"
    password = "sigmapassword123"

    userlogin = input("Enter Your Login: ")
    userpassword = input("Enter Your Password: ")

    if userlogin == login and userpassword == password:
        return True
    else:
        return False

