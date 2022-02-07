let userChoice = prompt("heads or tails");
let randomNumber = Math.floor(Math.random() * 2);
let computerChoice;
console.log (randomNumber);
console.log (userChoice);
if (randomNumber === 0) {
    computerChoice = "heads";
} else {
    computerChoice = "tails";
}
console.log (computerChoice);
if (computerChoice === userChoice) {
    alert ("You guessed right! The coin flip landed on " + userChoice + ".");
} else {
    alert ("Sorry, the coin flip landed on " + computerChoice + ".");
}

let birthYear = prompt("What is your birth year?");
let currentAge = 2022 - birthYear;
if (currentAge > 21) {
    alert ("You are old enough to drink in the US.");
} else if (currentAge === 21) {
    alert ("You are old enough to drink in the US...barely");
} else {
    alert ("Sorry, you are not old enough to drink in the US.");
}