// The computer has three options: rock, paper, or scissors
// Rock should be associated with 1, paper should be associated with 2, and scissors should be associated with 3
// Odin project suggests that Math.random is one way to get a random number
// One option is to use Math.random multiplied by three and then rounded down
// Then we add one to the answer to get exactly 1, 2, or 3
// We call the method, and then using if... else statements, determine if the computer has chosen rock, paper, or scissors

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3) + 1;

    if (computerNumber === 1) {
        return `rock`;
    }
    else if (computerNumber === 2) {
        return `paper`;
    }
    else {
        return `scissors`;
    }
}

// Now we need to get the human's choice
// The first thing to do is take their input through a screen prompt
// then we want to store that in the javascript somehow
// then we want to make sure their input is in lower case so there aren't any issues with case sensitivity
// then we want to store that in a variable that the function returns that can be passed as a parameter later on
// We also want to make sure the prompt retriggers when the old prompt is closed so we will need to add a javascript event listener
// After some debugging, it is clear that the rerun of the game is not working. 
// I am going to add an if else statement that checks whether input has been defined to try and solve this issue.
// It seems the getHumanChoice function was not the issue

function getHumanChoice() {
    let input = prompt("Rock, paper, or scissors?");
        let inputLowerCase = input.toLowerCase();
        return inputLowerCase
}

let humanScore = 0;
let computerScore = 0;

// Now we need a function that compares the players' selections and decides on a winner
// rock beats scissors
// scissors beats paper
// paper beats rock
// there will need to be if, else statements to account for all of these possibilities
// we also need to use += to increase the scores of either player depending on what they play


function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === 'rock' && computerChoice === "paper") {
        computerScore += 1;
        return `You played rock and computer played paper. Computer wins! Current score is human, ${humanScore}, computer, ${computerScore}!`
    }
    else if (humanChoice === 'rock' && computerChoice === "scissors") {
        humanScore += 1;
        return `You played rock and computer played scissors. You win! Current score is human, ${humanScore}, computer, ${computerScore}!`
    }
    else if (humanChoice === 'rock' && computerChoice === "rock") {
        return `You played rock and computer played rock. It's a draw! Current score is human, ${humanScore}, computer, ${computerScore}!`
    }
    else if (humanChoice === 'paper' && computerChoice === "rock") {
        humanScore += 1;
        return `You played paper and computer played rock. You win! Current score is human, ${humanScore}, computer, ${computerScore}!`
    }
    else if (humanChoice === 'paper' && computerChoice === "scissors") {
        computerScore += 1;
        return `You played paper and computer played scissors. Computer wins! Current score is human, ${humanScore}, computer, ${computerScore}!`
    }
    else if (humanChoice === 'paper' && computerChoice === "paper") {
        return `You played paper and computer played paper. It's a draw! Current score is human, ${humanScore}, computer, ${computerScore}!`
    }
    else if (humanChoice === 'scissors' && computerChoice === "rock") {
        computerScore += 1;
        return `You played scissors and computer played rock. Computer wins! Current score is human, ${humanScore}, computer, ${computerScore}!`
    }
    else if (humanChoice === 'scissors' && computerChoice === "scissors") {
        return `You played paper and computer played scissors. It's a draw! Current score is human, ${humanScore}, computer, ${computerScore}!`
    }
    else if (humanChoice === 'scissors' && computerChoice === "paper") {
        humanScore += 1;
        return `You played paper and computer played paper. You win! Current score is human, ${humanScore}, computer, ${computerScore}!`
    }

}

console.log(playRound());