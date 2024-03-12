function getComputerSelection() {
    // Create a variable randomNumber between 0 - 2
        let randomNumber = Math.floor(Math.random()*3);

    // Set getComputerSelection to "rock" (0), "paper" (1) or "scissors"(2)
        if (randomNumber == 0) {
            return "rock";
            }
            else if (randomNumber == 1) {
                return "paper";
            }
            else {
                return "scissors";
            }
            console.log(randomNumber);
    }