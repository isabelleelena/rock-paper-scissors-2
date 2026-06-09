// The computer has three options: rock, paper, or scissors
// Rock should be associated with 1, paper should be associated with 2, and scissors should be associated with 3
// Odin project suggests that Math.random is one way to get a random number
// One option is to use Math.random multiplied by three and then rounded down
// Then we add one to the answer to get exactly 1, 2, or 3
// We call the method, and then using if... else statements, determine if the computer has chosen rock, paper, or scissors

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3) + 1;

    if (computerNumber === 1) {
        return `The computer chose rock!`;
    }
    else if (computerNumber === 2) {
        return `The computer chose paper!`;
    }
    else {
        return `The computer chose scissors`;
    }
}

console.log(getComputerChoice())