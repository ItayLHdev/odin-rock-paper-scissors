const getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
        // no need to use break as `return` already exits the function
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

const getHumanChoice = () => prompt("Rock, Paper or Scissors").toLowerCase();

const playGame = () => {
    let humanScore = 0, computerScore = 0;
    const playRound = (humanChoice, computerChoice) => {
        if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
            console.log(`You Chose: ${humanChoice}.\nComputer Chose: ${computerChoice}.\n${computerChoice} beats ${humanChoice}.\nYou lose!`);
        computerScore++;
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You Chose: ${humanChoice}.\nComputer Chose: ${computerChoice}.\n${humanChoice} beats ${computerChoice}.\nYou win!`)
        humanScore++
        } else {
        console.log(`You Chose: ${humanChoice}.\nComputer Chose: ${computerChoice}.\nIt's a TIE!`);
        }
    };
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`======================\nYour Score: ${humanScore}\nComputer Score: ${computerScore}\n======================`)
    }
    if (humanScore > computerScore) {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$\nYou Won The Game :D")
    } else if (humanScore < computerScore) {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$\nYou lost The Game :(")
    } else {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$\nThe Game Ended With a TIE ^-^")
    }
}

playGame()