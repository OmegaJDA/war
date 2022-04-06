for (i = 0; I < 10; i++) {

$(“#practice”).append(i);

}
var list = [“apple”, “banana”, “orange”];  //Putting quotes around the fruit shows that they are strings, just a bunch of characters. If there were no quotes around them, the program would look for a variable called apple.

var L = list.length; //This finds the length of our list, a helpful tool!

$(“#practice”).append(list[1]);  //This will write on the screen, what? It writes banana. Why? Because arrays start with 0. Apple is in place 0 in the array. If we want to find and use apple, we have to use 0 like this.

list[0]   //We use square brackets to call up an item from the array. It’s the array variable name, square bracket, the index of the array item we are looking for, and we close the square bracket.
var fakeCards = [];

The length of fakeCards right now is 0.

for(i=1; i<53; i++){  //This will give us numbers 1 through 52.

fakeCards.push(i);  //Push is another set command, like .length finds the length.

}
var passengers = [

[“Lee”, “red”, “grapes”],

[“Dave”, “blue”, “oranges”]

];
var list = [0, 1, 2, 3, 4, 5]

list.join(“, “);

var passengers = [[“Lee”, “red”, “grapes”], [“Dave”, “blue”, “oranges”]];
var x = list.pop();

x would equal 5. List would now be [0, 1, 2, 3, 4].

var x = list.shift();

x would equal 0. List would now be [1, 2, 3, 4, 5].

var cards = [ ];  //declaring the variable cards as an empty array

for (i = 1; i < 14; i++) {  //uses the numbers 1 through 13 to represent ace through king

cards.push(i); //adds that card number to the array cards

}

for (i = 1; i < 14; i++) {  //uses the numbers 1 through 13 to represent ace through king

for (k = 1; k < 5; k++) {  //uses the numbers 1 through 4 to represent the four suits

j = [i, k];                      // creates an array with the card’s number and suit

cards.push(j);           //adds that card number to the array cards

}

}

cards.shuffle = function () {
  console.log("shuffle");
  var input = this;
  for (var i = cards.length-1; i >=0; i--) {
    var randomIndex = Math.floor(Math.random()*(i+1));
    var itemAtIndex = cards[randomIndex][0];
    var itemAtSecond = cards[randomIndex][1];
    input[randomIndex][0] = input[i][0];
    input[randomIndex][1] = input[i][1];
    input[i][0] = itemAtIndex;
    input[i][1] = itemAtSecond
  }
  return input;
}
if (firstPlayer.length == 0 || secondPlayer.length == 0) { endGame(); }
if (number1 > number2) { $firstPlayer.css(“border-color”, “red”);   }

cards.shuffle();
var half = cards.length/2;
for (i=0; i<half; i++){
  firstPlayer.push(cards[i]);
}

cards.splice(0, half);

secondPlayer = cards;
$player1Count.html(firstPlayer.length);
$player2Count.html(secondPlayer.length);

$draw.on('click', function()) {
  $firstPlayerSuit.epmty();
  $secondPlayerSuit.empty();
  var number1=firstPlayer[0][0];
  var number2=secondPlayer[0][0];
  //need to put in Jack, Queen, King.
  $firstPlayerNumber.html(number1);
  $secondPlayerNumber.html(number2);
  suit1 = firstPlayer[0][1];
  suit2 = secondPlayer[0][1];
}

if (suit1 == 1) {
  suit1 = "<img src='./images/hearts.png'/>";
}
if (suit1 == 2) {
  suit1 = "<img src='./images/diamonds.png'/>";
}
if (suit1 == 3) {
  suit1 = "<img src='./images/clubs.png'/>";
}
if (suit1 == 4) {
  suit1 = "<img src='./images/spades.png'/>";
}
if (sui21 == 1) {
  suit2 = "<img src='./images/hearts.png'/>";
}
if (suit2 == 2) {
  suit2 = "<img src='./images/diamonds.png'/>";
}
if (suit2 == 3) {
  suit2 = "<img src='./images/clubs.png'/>";
}
if (suit2 == 4) {
  suit2 = "<img src='./images/spades.png'/>";
}
for (i=0; i<number1; i++) {
  $firstPlayerSuit.append(suit1);
};

for (i=0; i<number2; i++) {
  $secondPlayerSuit.append(suit2);
}

playerCards.push(firstPlayer[0]);
playerCards.push(secondPlayer[0]);

firstPlayer.splice(0,1);
secondPlayer.splice(0,1);

if (number1 > number2) {
  $winner.html("Player One Wins");
  for (i=0; i<playerCards.length; i++) {
    firstPlayer.push(playerCards[i]);
  }
} else {
  $winner.html("Player Two Wins");
  for (i=0; i<playerCards.length; i++) {
    secondPlayer.push(playerCards[i]);
  }
}
playerCards = [];
$player1Count.html(firstPlayer.length);
$player2Count.html(secondPlayer.length);
//})

if (number1<11){

for (i=0; i<number1; i++) {

$firstPlayerSuit.append(suit1);

};

} else {

if (number1 == 11) {

numberImg1 = “<img src=’./images/jack.png’/>”;

$firstPlayerSuit.append(suit1);

$firstPlayerNumber.html(numberImg1);

}

if (number1 == 12) {

numberImg1 = “<img src=’./images/queen.png’/>”;

$firstPlayerSuit.append(suit1);

$firstPlayerNumber.html(numberImg1);

}

if (number1 == 13) {

numberImg1 = “<img src=’./images/king.png’/>”;

$firstPlayerSuit.append(suit1);

$firstPlayerNumber.html(numberImg1);

}

}

else if (number2 > number1){

//checks if player two wins the round

$winner.html(“Player Two Wins”);

//announces that player two wins

for (i=0; i<playedCards.length; i++) {

secondPlayer.push(playedCards[i]);

//player two gets the cards

}

} else if (number1 == number2) {

//checks if the players tied

$winner.html(“This means war!”);

//announces the war

for (i=0; i<3; i++){

//loops three times for three cards

playedCards.push(firstPlayer[0]);

//one card from each player’s hand is played

playedCards.push(secondPlayer[0]);

//they go into the played cards array

firstPlayer.splice(0,1);

//they are taken off the players’ arrays

secondPlayer.splice(0,1);

}



$firstPlayerSuit.css(“display”, “none”);

//removes the suit from the card area

$secondPlayerSuit.css(“display”, “none”);

//removes the suit from the card area



numberImg1 = “<img style=’height:14rem;’ src=’./images/cards.png’/>”;

$firstPlayerNumber.html(numberImg1);

//places an image in the number area of a card back

numberImg2 = “<img style=’height:14rem;’ src=’./images/cards.png’/>”;

$secondPlayerNumber.html(numberImg2);

//places an image in the number area of a card back



var audio = new Audio(‘card.mp3’);

//creates a variable that holds the sound of a card

audio.play();

//plays the sound



window.setTimeout(function() {

//delays the next thing from happening for 1000ms

audio.play();

//plays audio

}, 1000);

//determines how long to wait

window.setTimeout(function() {

//same thing again

audio.play();

}, 1800);

//this time waits 1800ms to separate the sounds

}
