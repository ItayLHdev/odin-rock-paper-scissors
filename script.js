const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = document.querySelectorAll("button");
const resultsDisplay = document.querySelector("#results");

const getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

const getHumanChoice = () => {
    const choice = prompt("Rock, Paper or Scissors").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("invalid input, please try again.")
        return getHumanChoice();
    }
};

const playRound = (humanChoice, computerChoice, display) => {
    if (humanChoice === computerChoice) {
        display.textContent = "Its a TIE"
    }
    else {
        switch (humanChoice) {
            case "rock":
                display.textContent = (computerChoice === "paper") ? "YOU LOSE" : "YOU WIN";
                break;
            case "paper":
                display.textContent = (computerChoice === "scissors") ? "YOU LOSE" : "YOU WIN";
                break;
            case "scissors":
                display.textContent = (computerChoice === "rock") ? "YOU LOSE" : "YOU WIN";
                break;
        }
    }

};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice(), resultsDisplay)
    })
});

const playGame = () => {
    let humanScore = 0, computerScore = 0;

    // for (let i = 0; i < 5; i++) {
    //     playRound(getHumanChoice(), getComputerChoice());
    //     console.log(`======================\nYour Score: ${humanScore}\nComputer Score: ${computerScore}\n======================`)
    // }
    if (humanScore > computerScore) {
        console.log("You Won The Game")
    } else if (humanScore < computerScore) {
        console.log("You lost The Game :(")
    } else {
        console.log("The Game Ended With a TIE ^-^")
    }
};