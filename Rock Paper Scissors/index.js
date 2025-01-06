let humanScore = 0;
let computerScore = 0;

playGame();

function getComputerChoice() {

    let computerChoice = "";
    let randomNumber = Math.random();

    if (randomNumber < .333) {
        computerChoice = "rock";
    }
    else if (.333 < randomNumber && randomNumber < .666) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    };

    return computerChoice;
}


function getHumanChoice() {
            
    let humanChoice = prompt("Please Enter Rock, Paper, or Scissors").toLowerCase();

        if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
            return getHumanChoice();
        }
        else {
            return humanChoice;
        }
}

function playGame() {
    startGame = confirm("Do you want to play Rock Paper Scissors?");

    if (startGame === true) {


        let humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

    } else {
        return;
    }

}


function playRound(humanChoice, computerChoice) {

    let roundWinner = "";


    if (humanChoice === "rock" && computerChoice === "scissors") {
        roundWinner = "Human";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        roundWinner = "Computer";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        roundWinner = "Human";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        roundWinner = "Computer";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        roundWinner = "Human";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        roundWinner = "Computer";
    } else {
        roundWinner ="Tie";
    }

  if (roundWinner === "Human") {
    humanScore = humanScore + 1;
    let scoreDeclaration = `\nThe score is\nYou:${humanScore} Computer:${computerScore}`
    console.log(`You chose: ${humanChoice}\nComputer chose: ${computerChoice}\nYou won that round!${scoreDeclaration}`);
  } else if (roundWinner === "Computer"){
    computerScore = computerScore + 1;
    let scoreDeclaration = `\nThe score is\nYou:${humanScore} Computer:${computerScore}`
    console.log(`You chose: ${humanChoice}\nComputer chose: ${computerChoice}\nYou lost that round!${scoreDeclaration}`);
  } else {
    let scoreDeclaration = `\nThe score is\nYou:${humanScore} Computer:${computerScore}`
    console.log(`You chose: ${humanChoice}\nComputer chose: ${computerChoice}\nYou tied!${scoreDeclaration}`);
  }

  if (humanScore === 3) {
    console.log('You won!');
    alert('You won!');
    return;
} else if (computerScore === 3) {
    console.log('You lost!');
    alert('You lost!');
    return;
} else {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

}
