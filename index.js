let randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);

let randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log(randomNumber2);

firstDice()
secondDice()
function firstDice() {
if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "dice1.png")
}
else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "dice2.png")
}
else if (randomNumber1 === 3) {
        document.querySelector(".img1").setAttribute("src", "dice3.png")
}
else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "dice4.png")
}
else if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "dice5.png")
}
else if (randomNumber1 === 6) {
    document.querySelector(".img1").setAttribute("src", "dice6.png")
}
}
function secondDice() {
    if (randomNumber2 === 1) {
        document.querySelector(".img2").setAttribute("src", "dice1.png")
    }
    else if (randomNumber2 === 2) {
        document.querySelector(".img2").setAttribute("src", "dice2.png")
    }
    else if (randomNumber2 === 3) {
            document.querySelector(".img2").setAttribute("src", "dice3.png")
    }
    else if (randomNumber2 === 4) {
        document.querySelector(".img2").setAttribute("src", "dice4.png")
    }
    else if (randomNumber2 === 5) {
        document.querySelector(".img2").setAttribute("src", "dice5.png")
    }
    else if (randomNumber2 === 6) {
        document.querySelector(".img2").setAttribute("src", "dice6.png")
    }
}

if (randomNumber1 > randomNumber2) {
    document.querySelector(".hh1").textContent = "Player 1 WINS"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector(".hh1").textContent = "Player 2 WINS"
}
else {
    document.querySelector(".hh1").textContent = "Draw one more time!"
}





