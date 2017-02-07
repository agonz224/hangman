window.onload = function () {
alert("CHOOSE. YOUR. CHICKEN!");
}

/*array*/
var chicken = ["fried", "barbecue", "grilled", "jerk"]

//chicken type will be replaced by spaces equal to length of word
var rawChicken = function () {
var chosenChicken[Math.floor(Math.random() * chicken.length)];
var hiddenChicken = chosenChicken.replace(/\s/g, "-");
console.log(chosenChicken);
buttons(); 

var guessesLeft = 10;
var losses = 0;
var wins = 0;
var previousGuesses = [];
var letterGuess = String.fromCharCode()
var chosenChicken = ;
var hiddenChicken = ;

}

document.onkeyup = function() {
letterGuess = String.fromCharCode(event.keyCode).toLowerCase();

if (letterGuess === previousGuesses) {
previousGuesses.push(letterGuess);
console.log("Not a match!");

if (letterGuess === letter in hiddenChicken) {

letter in chosenChicken = hiddenChicken.replace(/\s/g, "-");
    
if(letterGuess === chicken[0-4]) {
console.log("You got a chicken!");
wins++;

var rawChicken = function () {
var chosenChicken[Math.floor(Math.random() * chicken.length)];
var hiddenChicken = chosenChicken.replace(/\s/g, "-");
console.log(chosenChicken);
buttons(); 
/*reset the number of guesses available*/
function myFunction() {
    delete previousGuesses[];

}
}
else {
guessesLeft--;
        
if(guessesLeft === 0) {
console.log("you lost");
losses++;

//reset the number of guesses available
var rawChicken = function () {
var chosenChicken[Math.floor(Math.random() * chicken.length)];
var hiddenChicken = chosenChicken.replace(/\s/g, "-");
console.log(chosenChicken);
buttons(); 

function myFunction() {
    delete previousGuesses[];
}
}

}
}
else {
console.log("You tried that already.");
}
}

