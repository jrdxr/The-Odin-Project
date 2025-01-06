let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    

}

function getComputerChoice() {

    let computerChoice = "";
    let randomNumber = Math.random();

    if (randomNumber < .333) {
        computerChoice = "Rock";
    }
    else if (.333 < randomNumber && randomNumber < .666) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    };

    return computerChoice;
}



function getHumanChoice() {
    

    let humanChoice = prompt("Please Enter Rock, Paper, or Scissors").toLowerCase();

        if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
            return getHumanChoice();
        }
        else {
            return `Human chose ${humanChoice}`;
        
        }

}

