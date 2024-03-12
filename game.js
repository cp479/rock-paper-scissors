function getComputerSelection() {
    // Make the computer choose a number for 0 (rock), 1 (paper), 2 (scissors)
        let randomNumber = Math.floor(Math.random()*3);
        if (randomNumber == 0) {
            return "rock";
            }
            else if (randomNumber == 1) {
                return "paper";
            }
            else {
                return "scissors";
            }
            // Use console.log(randomNumber); to confirm
    }