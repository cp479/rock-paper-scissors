// Create getComputerSelection function
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

    // Create a function for getUserSelection
    function getUserSelection() {
        // Prompt user to choose "rock" "paper" or "scissors"
        let userInput = prompt("Choose 'rock', 'paper', or 'scissors'").toLowerCase();
        // Make sure that the answer is valid from the above choices; otherwise prompt again to choose a valid answer
        if (userInput == "rock" ||
            userInput == "paper" ||
            userInput == "scissors") {
                return userInput;
            }
            else {
                return "Please enter a valid answer";
            } ;
    }
