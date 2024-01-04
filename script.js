var randomNo1 = Math.floor(Math.random() * 6) + 1;
var randomNo2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource01 = "images/" + "dice" + randomNo1 + ".png";
var randomImageSource02 = "images/" + "dice" + randomNo2 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource01);

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource02);

if(randomNo1>randomNo2)
{
    document.querySelector("h1").innerHTML = "Player1 Won";
}
else if(randomNo1===randomNo2)
{
    document.querySelector("h1").innerHTML = "DRAW";
}
else
{
    document.querySelector("h1").innerHTML = "Player2 Won";
}
