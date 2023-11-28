function getComputerChoice() {
    let value = Math.floor(Math.random() * 9 );
    if (value < 3) {
        return "rock";
    } else if (value > 2 && value < 6) {
        return "paper";
    } else {
        return "scissors";
    }     
}

function playRound(playerInput = prompt("Choose Rock, Paper, or Scissors"), computerSelection = getComputerChoice()) {
    playerSelection = playerInput.toLowerCase();
    console.log("Player selected: " + playerInput + ". " + "Computer selected: " + computerSelection + ". ")

    if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore;
        console.log("You Win this round! Rock beats Scissors");
    }   else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;
        console.log("You Lose this round! Paper beats Rock");
    }   else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore;
        console.log("You Lose this round! Scissors beats Paper");
    }   else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore;
        console.log("You Win this round! Paper beats Rock");
    }   else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        console.log("You Lose this round! Rock beats Scissors");
    }   else if (playerSelection === "scissors" && computerSelection ==="paper") {
        ++playerScore;
        console.log("You Win this round! Scissors beats paper");
    }   else console.log("It's a tie. Play again!");
}

function game() {
    if (playerScore > computerScore) {
        console.log("You beat the computer. Wow you must be sooooo smart.");
    } else if (computerScore > playerScore) {
        console.log("You have been bested by AI. I mean this is just embarassing.");
    } else {
        console.log("It's a tie. Boooooooooo, you suck.");
    }
}

let playerScore = 0;
let computerScore = 0;

game();