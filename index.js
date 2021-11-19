var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var RandomDiceimage =  "dice" + randomNumber1 + ".png"; 

var randomDicePath = "images/" + RandomDiceimage ;

var image1 = document.querySelectorAll("img") [0] ;

image1.setAttribute("src", randomDicePath);


var randomNumber2 = Math.floor(Math.random() *6) + 1;

var RandomDiceimage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", RandomDiceimage2);

// player1 wins

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
}

//player2 wins

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!"
}

else {
    document.querySelector("h1").innerHTML = "It's a tie!"
}