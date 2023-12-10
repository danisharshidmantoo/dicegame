var randomNumber1 = Math.floor(Math.random()*6) + 1;
var diceimage1 = "./images/"+"dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",diceimage1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var diceimage2 = "./images/"+"dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",diceimage2);