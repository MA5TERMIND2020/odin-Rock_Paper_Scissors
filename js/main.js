//Create variables to keep track of the Score and Games Played.
let scorePlayer = 0;
let scoreComputer = 0;
let gamesPlayed = 0;


//Create an array called choices that contains the three options that a player can choose from.
const choices = ['Rock', 'Paper', 'Scissors'];

//Create references to all of the DOM nodes I will be needing
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const reset_div = document.querySelector(".reset-game");

// Add Event Listeners to the DOM nodes that I want to perform some action on once they are clicked.
rock_div.addEventListener('click', gameRock);
paper_div.addEventListener('click', gamePaper);
scissors_div.addEventListener('click', gameScissors);
reset_div.addEventListener('click', () => {
    resetGame();
});


function gameRock() {
    game('Rock');
}

function gamePaper() {
    game('Paper');
}

function gameScissors() {
    game('Scissors');
}


//Create a function that will randomly select the computers choice from the array of choices.

function getComputerChoice() {
    const choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

//Create functions for the actions to be taken depending on if the player won, lost, or there was a tie after running the Game() function.
function win(userChoice, computerChoice) {
    userScore_span.textContent = ++scorePlayer;
    result_div.textContent = `You Win! ${userChoice} Beats ${computerChoice}`;
    if (++gamesPlayed == 5) {resetGame()};
    console.log(gamesPlayed);
    console.log(userChoice);
    console.log(computerChoice);
}

function lose(userChoice, computerChoice) {
    computerScore_span.textContent = ++scoreComputer
    result_div.textContent = `You Lose. ${computerChoice} Beats ${userChoice}`;
    //++gamesPlayed;
    if (++gamesPlayed == 5) {resetGame()};
    console.log(gamesPlayed);
    console.log(userChoice);
    console.log(computerChoice);
}

function tie(userChoice, computerChoice) {
    result_div.textContent = "It's a Tie.";
    //++gamesPlayed
    if (++gamesPlayed == 5) {resetGame()};
    console.log(gamesPlayed);
    console.log(userChoice);
    console.log(computerChoice);
}

/*Create the Game() function.
 It will take the Users choice and perform some logic on it to determine if the player won, lost, or it was a tie.*/
function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "RockScissors":
        case "paperrock":
        case "ScissorsPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, computerChoice);
            break;
        default:
            tie(userChoice, computerChoice);  
    }
}

//Create the resetGame() function.
function resetGame() {
    if (gamesPlayed == 5) {
        checkGame();
        scorePlayer = 0;
    scoreComputer = 0;
    gamesPlayed = 0;
    result_div.textContent = resetText;
    reset_div.textContent = "Play Again?";
    rock_div.removeEventListener('click', gameRock);
    paper_div.removeEventListener('click', gamePaper);
    scissors_div.removeEventListener('click', gameScissors);
    }
    else {
    scorePlayer = 0;
    scoreComputer = 0;
    gamesPlayed = 0;
    userScore_span.textContent = 0;
    computerScore_span.textContent = 0;
    result_div.textContent = "Let's Play";
    }
}
let resetText = "Let's Play"

function checkGame() {
    scorePlayer > scoreComputer ? resetText = "Game Over. Player Wins!"
    : scorePlayer === scoreComputer ? resetText = "Game Over. It Was a Tie."
    : resetText = "Game Over. Computer Wins!"
}
