// CREATE a variable userScore and set value to 0
let userScore = 0
// CREATE a variable computerScore and set value to 0
let computerScore = 0

playGame(5);
declareWinner(userScore, computerScore);

// CREATE a function playGame
function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        playRound(getUserSelection(), getComputerSelection());
        console.log(`Round ${i+1}:   You: ${userScore}   Computer: ${computerScore}`);
    }
}

// Declare the winner of the game
function declareWinner(userScore, computerScore) {
    if (userScore == computerScore) {
        return alert("You tied. It's like kissing your sister.");
    }
    else if (userScore > computerScore) {
        return alert("You won.");
    }
    else return alert("You lost.");
}
// CREATE a function playRound with arguments userSelection and computerSelection
function playRound(userSelection, computerSelection) {
    // Show user and computer selections in console
    console.log("User: " + userSelection + "   Computer: " + computerSelection);
// Check for tie: if userSelection is the same as computerSelection
    if (userSelection == computerSelection) {
//      Display "You Tied" and userSelection == computerSelection
        console.log("Tie. You both selected: " + userSelection );
        return;
    }
// Check for win conditions
    else if (userSelection == "rock" && computerSelection == "scissors"
        || userSelection == "paper" && computerSelection == "rock"
        || userSelection == "scissors" && computerSelection == "paper") {
//      Display "You Won" and UserSelection beats computerSelection
        console.log("You won: " + userSelection + " beats " + computerSelection + "!!");
        return userScore += 1;
    }
// Since user did not tie or win, Display "You Lost" and ComputerSelection beats UserSelection
    else console.log("You lost: "+ computerSelection + " beats " + userSelection + ".");
        return computerScore += 1;
    };

// Create function getComputerSelection
function getComputerSelection() {
    // Create a variable randomNumber between 0 - 2
        let randomNumber = Math.floor(Math.random()*3);
        // console.log(randomNumber);
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
    }

// CREATE a function getUserSelection
function getUserSelection() {
    // ASK User to choose "Rock" "Paper" or "Scissors"
        let userInput = prompt("Choose 'Rock', 'Paper' or 'Scissors'").toLowerCase();
    // CHECK that answer is valid and return "idiot" if not
        if (userInput == "rock" || 
            userInput == "paper" ||
            userInput == "scissors") {
            return userInput;
        }
            else {
                return "idiot";
        } ;
    }