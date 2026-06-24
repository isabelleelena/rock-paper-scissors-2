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

// Now we need to play a five round game and see who wins!
// A for loop would work well for this
// We start with i = 0
// For i < 5, i++, the function playround is called
// If, at the end of five loops, humanScore is > computerScore, player is the winner, and vice versa

function playGame() {

    for (i = 0; i < 5; i++) {
        playRound();
    };

    if (humanScore < computerScore) {
        return `You have lost to the computer! The final score was human ${humanScore}, computer ${computerScore}.`
    }

    else if (humanScore > computerScore) {
        return `You have beaten the computer! The final score was human ${humanScore}, computer ${computerScore}.`
    }
}

// console.log(playGame());

let rockButton = document.querySelector(".r-button");
let paperButton = document.querySelector(".p-button");
let scissorsButton = document.querySelector(".s-button");
let tally = document.querySelector(".tally");

function checkScore () {
    
}

rockButton.addEventListener("click", (event) => {

    let computerChoice = getComputerChoice();
    let humanChoice = "rock";

    if (computerChoice === "paper") {
        computerScore += 1;

        if (humanScore === 5) {
        return tally.textContent = `Congratulations! You were the first to five points. You are the ultimate winner! Refresh the screen to start again.`
        }
        else if (computerScore === 5) {
        return tally.textContent = `Oh no, computer was the first to five points. Better luck next time! Refresh the screen to start again.`
        }
        else {
        return tally.textContent = `You played rock and computer played paper. Computer wins! Current score is human, ${humanScore}, computer, ${computerScore}!`;
        }
    }
    else if (computerChoice === "scissors") {
        humanScore += 1;

        if (humanScore === 5) {
        return tally.textContent = `Congratulations! You were the first to five points. You are the ultimate winner! Refresh the screen to start again.`
        }
        else if (computerScore === 5) {
        return tally.textContent = `Oh no, computer was the first to five points. Better luck next time! Refresh the screen to start again.`
        }
        else {
        return tally.textContent = `You played rock and computer played scissors. You win! Current score is human, ${humanScore}, computer, ${computerScore}!`;
        }
    }
    else if (computerChoice === "rock") {

        if (humanScore === 5) {
        return tally.textContent = `Congratulations! You were the first to five points. You are the ultimate winner! Refresh the screen to start again.`
        }
        else if (computerScore === 5) {
        return tally.textContent = `Oh no, computer was the first to five points. Better luck next time! Refresh the screen to start again.`
        }
        else {
        return tally.textContent = `You played rock and computer played rock. It's a draw! Current score is human, ${humanScore}, computer, ${computerScore}!`;
        }
    }

    
    
});



paperButton.addEventListener("click", (event) => {

    let computerChoice = getComputerChoice();
    let humanChoice = "paper";

    if (computerChoice === "paper") {

        if (humanScore === 5) {
        return tally.textContent = `Congratulations! You were the first to five points. You are the ultimate winner! Refresh the screen to start again.`
        }
        else if (computerScore === 5) {
        return tally.textContent = `Oh no, computer was the first to five points. Better luck next time! Refresh the screen to start again.`
        }
        else {
        return tally.textContent = `You played paper and computer played paper. It's a draw! Current score is human, ${humanScore}, computer, ${computerScore}!`;
        }
    }
    else if (computerChoice === "scissors") {
        computerScore += 1;

        if (humanScore === 5) {
        return tally.textContent = `Congratulations! You were the first to five points. You are the ultimate winner! Refresh the screen to start again.`
        }
        else if (computerScore === 5) {
        return tally.textContent = `Oh no, computer was the first to five points. Better luck next time! Refresh the screen to start again.`
        }
        else {
        return tally.textContent = `You played paper and computer played scissors. Computer wins! Current score is human, ${humanScore}, computer, ${computerScore}!`;
        }
    }

    else if (computerChoice === "rock") {
        humanScore += 1;

        if (humanScore === 5) {
        return tally.textContent = `Congratulations! You were the first to five points. You are the ultimate winner! Refresh the screen to start again.`
        }
        else if (computerScore === 5) {
        return tally.textContent = `Oh no, computer was the first to five points. Better luck next time! Refresh the screen to start again.`
        }
        else {
        return tally.textContent = `You played paper and computer played rock. You win! Current score is human, ${humanScore}, computer, ${computerScore}!`;
        }
    }
    
});
;



scissorsButton.addEventListener("click", (event) => {

    let computerChoice = getComputerChoice();
    let humanChoice = "scissors";

    if (computerChoice === "paper") {
        humanScore += 1;

        if (humanScore === 5) {
        return tally.textContent = `Congratulations! You were the first to five points. You are the ultimate winner! Refresh the screen to start again.`
        }
        else if (computerScore === 5) {
        return tally.textContent = `Oh no, computer was the first to five points. Better luck next time! Refresh the screen to start again.`
        }
        else {
        return tally.textContent = `You played scissors and computer played paper. You win! Current score is human, ${humanScore}, computer, ${computerScore}!`;
        }
    }
    else if (computerChoice === "scissors") {

        if (humanScore === 5) {
        return tally.textContent = `Congratulations! You were the first to five points. You are the ultimate winner! Refresh the screen to start again.`
        }
        else if (computerScore === 5) {
        return tally.textContent = `Oh no, computer was the first to five points. Better luck next time! Refresh the screen to start again.`
        }
        else {
        return tally.textContent = `You played scissors and computer played scissors. It's a draw! Current score is human, ${humanScore}, computer, ${computerScore}!`; 
        }
    }
    else if (computerChoice === "rock") {
        computerScore += 1;
        
        if (humanScore === 5) {
        return tally.textContent = `Congratulations! You were the first to five points. You are the ultimate winner! Refresh the screen to start again.`
        }
        else if (computerScore === 5) {
        return tally.textContent = `Oh no, computer was the first to five points. Better luck next time! Refresh the screen to start again.`
        }
        else {
        return tally.textContent = `You played scissors and computer played rock. Computer wins! Current score is human, ${humanScore}, computer, ${computerScore}!`;
        }
    }

});
