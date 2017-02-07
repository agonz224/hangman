

var chicken = ["fried", "barbecue", "grilled", "jerk"]
var guessesLeft = 10;
var losses = 0;
var wins = 0;
var previousGuesses = [];

var chosenChick = chicken[Math.floor(Math.random() * chicken.length)];

var cooked = function () {
word = chosenChick[Math.floor(Math.random() * chosenCategory.length)];
word = word.replace(/\s/g, "-");
console.log(word);
buttons();
}