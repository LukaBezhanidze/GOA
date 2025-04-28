import random


list = ["rock", "paper", "scissors"]



while True:
 computer = random.choice(["rock", "paper", "scissors"])
 user_input = (input("rock paper or scissors: "))
 if computer == user_input:
    print("its a tie")
 elif user_input == "rock" and computer == "scissors":
    print("You won and the computer lost")
 elif user_input == "scissors" and computer == "rock":
     print("You lost and the computer won")
 elif user_input == "paper" and computer == "rock":
   print("You won and the computer lost")
 elif user_input == "rock" and computer == "paper":
    print("you lost and the computer won")
 elif user_input == "scissors" and computer == "paper":
    print("You won and the computer lost")
 elif user_input == "paper" and computer == "scissors":
    print("you lost and the computer lost")
    user_input = (input("rock paper or scissors: "))
   



