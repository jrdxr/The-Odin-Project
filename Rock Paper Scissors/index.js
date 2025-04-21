let playerScore = 0;
let computerScore = 0;
let round = 0;
const targetScore = 5;
const playerChoices = document.querySelector('#playerChoices');
const roundDisplay = document.querySelector('#round span');
const computerChoiceDisplay = document.querySelector('#computerChoice span');
const playerChoiceDisplay = document.querySelector('#playerChoice span');
const computerScoreDisplay = document.querySelector('#computerScore span');
const playerScoreDisplay = document.querySelector('#playerScore span');
const roundWinnerDisplay = document.querySelector('#roundWinner span');


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

    computerChoiceDisplay.innerText = computerChoice[0].toUpperCase() + computerChoice.slice(1);
    return computerChoice;
}

function playRound(playerChoice) {


    round = round + 1;

    roundDisplay.innerText = `${round}`;

    let computerChoice = getComputerChoice();


    if ((computerChoice === "rock" && playerChoice === "scissors")
        ||
        (computerChoice === "scissors" && playerChoice === "paper")
        ||
        (computerChoice === "paper" && playerChoice === "rock")
    ) {
        computerScore = computerScore + 1;
        computerScoreDisplay.innerText = `${computerScore}`;
        roundWinnerDisplay.innerText = 'The computer won that round';
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors")
        ||
        (playerChoice === "scissors" && computerChoice === "paper")
        ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        playerScore = playerScore + 1;
        playerScoreDisplay.innerText = `${playerScore}`;
        roundWinnerDisplay.innerText = 'You won that round';
    } else {
        roundWinnerDisplay.innerText = 'You Tied!';
    }

}

function playGame() {

    playerChoices.addEventListener('click', function getPlayerChoice(e) {
        let playerChoice = '';
        let target = e.target;

        switch(target.id) {
            case 'rock':
                console.log('Rock was clicked');
                playerChoice = 'rock';
                playerChoiceDisplay.innerText = 'Rock';
                break;
            case 'paper':
                console.log('Paper was clicked');
                playerChoice = 'paper';
                playerChoiceDisplay.innerText = 'Paper';
                break;
            case 'scissors':
                console.log('Scissors was clicked');
                playerChoice = 'scissors';
                playerChoiceDisplay.innerText = 'Scissors';
                break;
        }

        

        if (playerScore === targetScore) {

            alert('You won!');
            resetGame();

        } else if (computerScore === targetScore) {
    
            alert('You lost!');
            resetGame();

        } else {
            playRound(playerChoice);
        }
    });


}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    roundDisplay.innerText = '1';
    computerChoiceDisplay.innerText = '';
    playerChoiceDisplay.innerText = '';
    computerScoreDisplay.innerText = '';
    playerScoreDisplay.innerText = '';
    roundWinnerDisplay.innerText = ''; 

}

playGame();