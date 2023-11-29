document.addEventListener('DOMContentLoaded', () => {

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
        if (playerSelection === "rock" && computerSelection === "scissors") {
            ++playerScore;
            roundInfo = "You Win this round! Rock beats Scissors. ";
        }   else if (playerSelection === "rock" && computerSelection === "paper") {
            ++computerScore;
            roundInfo = "You Lose this round! Paper beats Rock. ";
        }   else if (playerSelection === "paper" && computerSelection === "scissors") {
            ++computerScore;
            roundInfo = "You Lose this round! Scissors beats Paper. ";
        }   else if (playerSelection === "paper" && computerSelection === "rock") {
            ++playerScore;
            roundInfo = "You Win this round! Paper beats Rock. ";
        }   else if (playerSelection === "scissors" && computerSelection === "rock") {
            ++computerScore;
            roundInfo = "You Lose this round! Rock beats Scissors. ";
        }   else if (playerSelection === "scissors" && computerSelection ==="paper") {
            ++playerScore;
            roundInfo = "You Win this round! Scissors beats paper. ";
        }   else roundInfo = "It's a tie. Play again! ";

        selectionInfo = 'Player selected: ' + playerSelection + '. ' + 'Computer selected: ' + computerSelection + '. ';
        gameScore = 'Player Score: ' + playerScore + '. ' + 'Computer Score: ' + computerScore + '. ';
        divResults.textContent = selectionInfo + roundInfo + gameScore;
        if (playerScore == 5) {
            divResults.textContent = selectionInfo + roundInfo + gameScore + "Congratulations, you won!";
            playerScore = computerScore = 0;
        }   else if (computerScore == 5) {
            divResults.textContent = selectionInfo + roundInfo + gameScore + "You lost to a computer!";
            playerScore = computerScore = 0;
        }
    }

    function playGame() {
        btnRock.addEventListener('click',(event) => {
        let playerSelection = "rock";
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        });

        btnPaper.addEventListener('click',(event) => {
        let playerSelection = "paper";
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        });

        btnScissors.addEventListener('click',(event) => {
        let playerSelection = "scissors";
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        });
           
        
    }

    let playerScore = 0;
    let computerScore = 0;
    let divResults = document.querySelector('#results');
    let btnRock = document.querySelector('#rock');
    let btnPaper = document.querySelector('#paper');
    let btnScissors = document.querySelector('#scissors');
    playGame();
    
});
