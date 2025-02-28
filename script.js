const choice = ["rock", "paper", "scissor"];
let a = 0;
let b = 0;

function playGame(userChoice) {
    let RandomChoice = choice[Math.floor(Math.random() * choice.length)];
    console.log("Computer chose:", RandomChoice);

    if (userChoice === RandomChoice) {
        document.querySelector("#result").innerText = "THE GAME IS TIED";
    } else if (
        (userChoice === "rock" && RandomChoice === "scissor") ||
        (userChoice === "paper" && RandomChoice === "rock") ||
        (userChoice === "scissor" && RandomChoice === "paper")
    ) {
        document.querySelector("#result").innerText = "YOU WIN";
        a++;
    } else {
        document.querySelector("#result").innerText = "COMPUTER WIN";
        b++;
    }

    updateScore();
}

function updateScore() {
    document.getElementById("UserScore").innerText = a;
    document.getElementById("ComputerScore").innerText = b;
}

function Reset() {
    a = 0;
    b = 0;
    document.querySelector("#result").innerText = "Score Reset!";
    updateScore();
}