let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let img1 = document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
let img2 = document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

let winner = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    winner.innerHTML = "<h1>🕺Player 1 Wins!</h1>";
} else if (randomNumber2 > randomNumber1) {
    winner.innerHTML = "<h1>Player 2 Wins! 🕺</h1>";
} else {
    winner.innerHTML = "<h1>👌Draw!👌</h1>";
}