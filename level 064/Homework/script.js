function RockPaperScissors() {
    const possibleMoves = ['rock', 'paper', 'scissors'];
    const playerMove = prompt("Enter your move (rock, paper, or scissors):").toLowerCase();

    if (!possibleMoves.includes(playerMove)) {
        alert("Invalid move! Please enter rock, paper, or scissors.");
        return;
    }

    let ComputerMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];


    let wincount_computer = 0;
    let wincount_player = 0;
    
    console.log(`Computer move: ${ComputerMove}`);

    if (playerMove === ComputerMove) {
        console.log("It's a tie!");
    } else if (playerMove === 'rock' && ComputerMove === 'scissors') {
        console.log("You win! Rock crushes scissors.");
        wincount_player++;
    } else if (playerMove === 'paper' && ComputerMove === 'rock') {
        console.log("You win! Paper covers rock.");
        wincount_player++;
    } else if (playerMove === 'scissors' && ComputerMove === 'paper') {
        console.log("You win! Scissors cut paper.");
        wincount_player++;
    } else {
        console.log("You lose!")
        wincount_computer++;
    }
           
    console.log(`Player score: ${wincount_player}`);
    console.log(`Computer score: ${wincount_computer}`);
}

RockPaperScissors();