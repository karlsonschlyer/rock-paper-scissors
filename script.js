document.addEventListener('DOMContentLoaded', () => {

    let btnRock = document.querySelector('#rock');
    btnRock.addEventListener('click',(event) => {
        let playerSelection = "rock";
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    });
    let btnPaper = document.querySelector('#paper');
    btnPaper.addEventListener('click',(event) => {
        let playerSelection = "paper";
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    });
    let btnScissors = document.querySelector('#scissors');
    btnScissors.addEventListener('click',(event) => {
        let playerSelection = "scissors";
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    });

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

    function playRound(playerSelection, computerSelection) {
        console.log("Player selected: " + playerSelection + ". " + "Computer selected: " + computerSelection + ". ")

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

   

    let playerScore = 0;
    let computerScore = 0;

});
