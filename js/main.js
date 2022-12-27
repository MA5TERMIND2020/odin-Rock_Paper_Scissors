const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Create an array called choices that contains the three options that a player can choose from.
const choices = ['rock', 'paper', 'scissors'];

//Create a function that will randomly select the computers choice from the array of choices.

function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random(choices) * 3)];
    return computerChoice
}

/*Create a function that will get the selection of the player. It will perform input validation
 so that as long as the input is a case-insensitive match for one of the options that a player
 can choose from it will be accepted. Otherwise, it will keep asking the user for their selection*/

function getPlayerChoice() {
    let choice;
    while (choice === undefined) {
    rock_div.addEventListener('click', () => {choice = "rock"});
    if (choice = "rock") {
    return choice;
    }
    else {continue};
    }
    /*let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Please make your selection. You can choose either Rock, Paper, or Scissors.");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (choices.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }*/
}

/*Create a function that will greet the user with a "Welcome!" message, then allow the user to play five rounds against the computer before finally
 ending the game with a message saying "Game Over".*/

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        function playRound(playerSelection, computerSelection) {
            if(playerSelection == computerSelection) {
                console.log("It's a Tie");
            }
            else if(
                (playerSelection == "rock" && computerSelection == "scissors") ||
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper")
            ) {
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                scorePlayer++;
            }
            else {
                console.log(`You Lose. ${computerSelection} beats ${playerSelection}`);
                scoreComputer++
            }
        }
        playRound(playerSelection, computerSelection)
        console.log("*********************************");
    }
    console.log("Game Over");
    if(scorePlayer > scoreComputer) {
        console.log(`YOU WON!!! The score was ${scorePlayer} to ${scoreComputer}.`);
    }
    else if(scorePlayer == scoreComputer) {
        console.log(`IT WAS A TIE. The score was ${scorePlayer} to ${scoreComputer}.`);
    }
    else {
        console.log(`THE COMPUTER WON. The score was ${scorePlayer} to ${scoreComputer}.`);
    }
}

game()
