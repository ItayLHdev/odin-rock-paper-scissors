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

let humanScore = 0, computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        alert(`You Chose: ${humanChoice}.\nComputer Chose: ${computerChoice}.\n${computerChoice} beats ${humanChoice}.\nYou lose!`);
        computerChoice++;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        alert(`You Chose: ${humanChoice}.\nComputer Chose: ${computerChoice}.\n${humanChoice} beats ${computerChoice}.\nYou win!`)
        humanChoice++
    }
    
    else {
        alert(`You Chose: ${humanChoice}.\nComputer Chose: ${computerChoice}.\nIt's a TIE!`);
    }
};

playRound(getHumanChoice(), getComputerChoice())