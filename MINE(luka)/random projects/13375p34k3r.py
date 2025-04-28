# # leetspeak = {
# #     "y": "-/",
# #     "l": "1",
# #     "e": "3",
# # }

# # leetsp33ak = ""
# # user_input = input("3nt3r 4 5tr: ")

# # for char in user_input:
# #     if char in leetspeak:
# #         leetsp33ak += leetspeak[char]
# #     else:
# #         leetsp33ak += char

# # print("leetspeak: ", leetsp33ak)
# user_input = input("enter a string")

# def l33tspeak():
#     carieli = ""
#     leettspeak_dictionary = {
#         "y": "-/",
#         "l": "1",
#         "e": "e",
#     }
#     for char in user_input:
#         if char in leettspeak_dictionary:
#             carieli += leettspeak_dictionary[char]
#         else:
#             carieli += char

import sys
flags = 0
guessed_word = "sigma"
print("word is", len(guessed_word), " letters long")
user_input = input("Guess the word:")
while True:
    if user_input != guessed_word:
        print("youve got the wrong answer")
        flags += 1
        break
    
    elif type(user_input) != str:
        print("you need to enter a string")
    elif user_input == guessed_word:
        print("Youve won")
sys.exit



    











    