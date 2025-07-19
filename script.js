const getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
        // no need to use break as `return` already exits the function
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
    }
}