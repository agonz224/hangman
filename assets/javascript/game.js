var guessesLeft = 10;
var losses = 0;
var wins = 0;
var previousGuesses = [];
var letterGuess; //String.fromCharCode();
var dash = [];

/*array*/
var chicken = ["fried", "barbecue", "grilled", "jerk"];

//picks index of chicken array at random for hangman play
var chickPick = chicken[Math.floor(Math.random() * chicken.length)];
console.log(chickPick)

//chicken type will be replaced by spaces equal to length of word (dash)
 for (var i=0; i < chickPick.length; i++) {
 dash[i] = "-";
}
console.log(dash)

// keys pressed will be compared to letters in chickPick
document.onkeyup = function(event) {
var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
for (var i = 0; i < chickPick.length; i++) 
if (letterGuess === chickPick[i]) {
alert("match!");
}
}



 





