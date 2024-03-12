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
            // console.log(randomNumber);
    }

    // Create a function for getUserSelection
    function getUserSelection() {
        // Prompt user to choose "rock" "paper" or "scissors" and convert to lower case so that it's case insensitive
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

    // Create a function playRound with arguments userSelection and computerSelection
    // Define userScore and computerScore

    let userScore = 0
    let computerScore = 0
    
    function playRound(userSelection, computerSelection) {
        //Show user and computer selections in console
        console.log ("User: " + userSelection + "   Computer: " + computerSelection);
        //Check for tie if both are the same
        if (userSelection == computerSelection) {
            // Show 'Tied!' and userSelection == computerSelection
            console.log("Tie! You both selected: " + userSelection);
            return;
        }
        // Check for win cons 
        else if (userSelection == "rock" && computerSelection == "scissors"
        || userSelection == "paper" && computerSelection == "rock"
        || userSelection == "scissors" && computerSelection == "paper") {
            // Show "You win!" and userSelection beats computerSelection
            console.log("You won: " + userSelection + " beats " + computerSelection)
            return userScore += 1;
        }
        // If user did not win or tie, show "You lost" and computerSelection beats userSelection
        else console.log("You lost" + computerSelection + " beats " + userSelection)
        return computerScore += 1;
    }