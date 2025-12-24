const buttons = document.querySelectorAll("button");
const resultsDisplay = document.querySelector("#results");
const scoreDisplay = document.querySelector("#score")
const humanChoiceDisplay = document.querySelector("#human-display")
const computerChoiceDisplay = document.querySelector("#computer-display")

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNum = Math.floor(Math.random() * 3)
    return choices[randomNum]
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice())
    });
});

const playRound = (humanChoice, computerChoice,) => {
    humanChoiceDisplay.textContent = `👨 Human Chose: ${humanChoice}`;
    computerChoiceDisplay.textContent = `🤖 Computer Chose: ${computerChoice}`;

    if (humanChoice === computerChoice) {
        resultsDisplay.textContent = "Its a TIE";
    } else {
        switch (humanChoice) {
            case "rock":
                resultsDisplay.textContent = (computerChoice === "paper") ? "YOU LOSE" : "YOU WIN";
                break;
            case "paper":
                resultsDisplay.textContent = (computerChoice === "scissors") ? "YOU LOSE" : "YOU WIN";
                break;
            case "scissors":
                resultsDisplay.textContent = (computerChoice === "rock") ? "YOU LOSE" : "YOU WIN";
                break;
        }
    }

    const results = resultsDisplay.textContent;

    switch (results) {
        case "YOU WIN":
            playGame(1);
            break;
        case "YOU LOSE":
            playGame(-1);
            break;
    }
};

let humanScore = 0, computerScore = 0;
const playGame = (result) => {

    if (result === 1) humanScore++;
    else if (result === -1) computerScore++

    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            resultsDisplay.textContent = "PLAYER WON 👨";
        } else if (humanScore < computerScore) {
            resultsDisplay.textContent = "COMPUTER WON 🤖";
        } else {
            resultsDisplay.textContent = "the game ended in a TIE";
        }
        humanScore = 0;
        computerScore = 0;
    }

    scoreDisplay.textContent = `${humanScore} : ${computerScore}`
};