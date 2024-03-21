let playerChoice = document.querySelectorAll(".player-choice");
let computerSelection;
let playerScoreContainer = document.getElementById("playeScore");
let computerScoreContainer = document.getElementById("computerScore");
let computerChoiceContainer = document.getElementById("computerChoice");
let messageContainer = document.querySelector(".message");
let message = messageContainer.querySelector(".result");

let playerScore = 0;
let computerScore = 0;
let maxScore = 5;

let resetGame = document.getElementById("resetGame")

playerChoice.forEach(function (choice) {
    choice.addEventListener("click", function () {
        playerChoice.forEach(function (ch) {
            ch.classList.remove("selected");
        });
        choice.classList.add("selected");

        let playerSelection = choice.getAttribute("data-choice");
        console.log(playerSelection);
        computerSelection = getComputerChoice();

        console.log(computerSelection);

        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        messageContainer.classList.remove("hidden");

    })
});

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        message.innterText = "Tied! You both chose the same one";
        message.classList.remove("victory", "defeat");
    } 
    else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
        message.innterText = "You win!"
        message.classList.remove("defeat");
        message.classList.add("victory");

        playerScore++;
        playerScoreContainer.innterText = playerScore;

        if (playerScore === maxScore) {
            message.innerText = "You won the game!"
            gameOver()
        }
    } 
    else {
        message.innerText = "You lost!"
        message.classList.remove("victory");
        message.classList.add("defeat");

        computerScore++;
        computerScoreContainer.innerText = computerScore;

        if (computerScore === maxScore) {
            message.innerText = "Computer wins the game!"
            gameOver()
        }
    }
    return message.innerText;
}

// Create function getComputerChoice refactored
function getComputerChoice() {
    // Create a variable randomNumber between 0 - 2
    const randomNumber = Math.floor(Math.random() * 3);
    
    let computerChoice;
    // console.log(randomNumber);
    // Set getComputerSelection to "rock" (0), "paper" (1) or "scissors"(2)

    if (randomNumber == 0) {
        computerChoice = "rock";
    } else if (randomNumber == 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    
    return computerChoiceContainer.innerText = computerChoice;
}

function gameOver() {
    playerChoice.forEach(function (choice) {
        choice.setAttribute("disabled", true);
        choice.classList.remove("selected");

    }
    );
    resetGame.style.display = "block";
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreContainer.innerText = playerScore;
    computerScoreContainer.innterText = computerScore;

    playerChoice.forEach(function (choice) {
        choice.removeAttribute("disabled");
    }
    );
    resetGame.style.display = "none";
    messageContainer.classList.add("hidden");
}

resetGame.addEventListener("click", reset);

// Refactoring initial code, commented below



// // Start variable to track userScore at 0
// let userScore = 0
// // Start variable to track computerScore at 0
// let computerScore = 0



// // Declare the winner of the game
// function declareWinner(userScore, computerScore) {
//     if (userScore == computerScore) {
//         return alert("You tied! Good game!");
//     }
//     else if (userScore > computerScore) {
//         return alert("You won! Well played!");
//     }
//     else return alert("You lost. Try again!");
// }
// // Create function playRound with arguments userSelection and computerSelection
// function playRound(userSelection, computerSelection) {
//     // Show user and computer selections in console
//     console.log("User: " + userSelection + "   Computer: " + computerSelection);
//     // Check for tie: if userSelection is the same as computerSelection
//     if (userSelection == computerSelection) {
//         //      Display "You Tied" and userSelection == computerSelection
//         console.log("Tie. You both selected: " + userSelection);
//         return;
//     }
//     // Check for win conditions
//     else if (userSelection == "rock" && computerSelection == "scissors"
//         || userSelection == "paper" && computerSelection == "rock"
//         || userSelection == "scissors" && computerSelection == "paper") {
//         //      Display "You Won" and UserSelection beats computerSelection
//         console.log("You won: " + userSelection + " beats " + computerSelection);
//         return userScore += 1;
//     }
//     // If user did not tie or win, Display "You Lost" and ComputerSelection beats UserSelection
//     else console.log("You lost: " + computerSelection + " beats " + userSelection);
//     return computerScore += 1;
// };

// // Create function getComputerSelection
// function getComputerSelection() {
//     // Create a variable randomNumber between 0 - 2
//     let randomNumber = Math.floor(Math.random() * 3);
//     // console.log(randomNumber);
//     // Set getComputerSelection to "rock" (0), "paper" (1) or "scissors"(2)
//     if (randomNumber == 0) {
//         return "rock";
//     }
//     else if (randomNumber == 1) {
//         return "paper";
//     }
//     else {
//         return "scissors";
//     }
// }

// // Create function getUserSelection
// function getUserSelection() {
//     // Prompt user to choose "Rock" "Paper" or "Scissors" and convert for case insensitivity
//     let userInput = prompt("Choose 'Rock', 'Paper' or 'Scissors'").toLowerCase();
//     // Check that answer is valid
//     if (userInput == "rock" ||
//         userInput == "paper" ||
//         userInput == "scissors") {
//         return userInput;
//     }
//     // This doesn't error properly - revisit another time
//     else {
//         return "Please choose a valid answer";
//     };
// }