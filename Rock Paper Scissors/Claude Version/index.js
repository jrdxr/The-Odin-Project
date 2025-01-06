/**
 * Rock Paper Scissors Game
 * A simple implementation with proper state management and game rules
 */

class GameState {
    constructor(winningScore = 3) {
        this.humanScore = 0;
        this.computerScore = 0;
        this.winningScore = winningScore;
    }

    incrementScore(winner) {
        if (winner === 'Human') this.humanScore++;
        if (winner === 'Computer') this.computerScore++;
    }

    isGameOver() {
        return this.humanScore === this.winningScore || 
               this.computerScore === this.winningScore;
    }

    getScoreMessage() {
        return `\nThe score is\nYou: ${this.humanScore} Computer: ${this.computerScore}`;
    }
}

// Define game rules as a lookup object
const gameRules = {
    rock: { beats: 'scissors' },
    paper: { beats: 'rock' },
    scissors: { beats: 'paper' }
};

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    const validChoices = ['rock', 'paper', 'scissors'];
    const choice = prompt("Please enter Rock, Paper, or Scissors").toLowerCase();
    return validChoices.includes(choice) ? choice : getHumanChoice();
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return 'Tie';
    return gameRules[humanChoice].beats === computerChoice ? 'Human' : 'Computer';
}

function displayRoundResult(humanChoice, computerChoice, winner, gameState) {
    const resultMessages = {
        Human: 'You won that round!',
        Computer: 'You lost that round!',
        Tie: 'You tied!'
    };

    console.log(
        `You chose: ${humanChoice}\n` +
        `Computer chose: ${computerChoice}\n` +
        `${resultMessages[winner]}${gameState.getScoreMessage()}`
    );
}

function announceWinner(gameState) {
    const message = gameState.humanScore > gameState.computerScore ? 
        'You won!' : 'You lost!';
    console.log(message);
    alert(message);
}

function playRound(gameState) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const winner = determineWinner(humanChoice, computerChoice);
    
    gameState.incrementScore(winner);
    displayRoundResult(humanChoice, computerChoice, winner, gameState);
    
    if (!gameState.isGameOver()) {
        playRound(gameState);
    } else {
        announceWinner(gameState);
    }
}

function initGame() {
    const game = new GameState();
    if (confirm("Do you want to play Rock Paper Scissors?")) {
        playRound(game);
    }
}

// Start the game
initGame();