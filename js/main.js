//Create variables to keep track of the score
let scorePlayer = 0;
let scoreComputer = 0;
let gamesPlayed = 0;


//Create an array called choices that contains the three options that a player can choose from.
const choices = ['Rock', 'Paper', 'Scissors'];


const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const reset_div = document.querySelector(".reset-game");

//Event Listeners
rock_div.addEventListener('click', () => {
    game('Rock');
});
paper_div.addEventListener('click', () => {
    game('Paper');
});
scissors_div.addEventListener('click', () => {
    game('Scissors');
});
reset_div.addEventListener('click', () => {
    resetGame(gamesPlayed);
});



//Create a function that will randomly select the computers choice from the array of choices.

function getComputerChoice() {
    const choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

function win(userChoice, computerChoice) {
    userScore_span.textContent = ++scorePlayer;
    result_div.textContent = `You Win! ${userChoice} Beats ${computerChoice}`;
    if (++gamesPlayed == 5) {resetGame(userChoice, computerChoice)};
    console.log(gamesPlayed);
}

function lose(userChoice, computerChoice) {
    computerScore_span.textContent = ++scoreComputer
    result_div.textContent = `You Lose. ${computerChoice} Beats ${userChoice}`;
    //++gamesPlayed;
    if (++gamesPlayed == 5) {resetGame(userChoice, computerChoice)};
    console.log(gamesPlayed);
}

function tie(userChoice, computerChoice) {
    result_div.textContent = "It's a Tie.";
    //++gamesPlayed
    if (++gamesPlayed == 5) {resetGame(userChoice, computerChoice)};
    console.log(gamesPlayed);
}

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

function resetGame(scorePlayer, scoreComputer) {
    if (gamesPlayed == 5) {
        setTimeout(function(scorePlayer, scoreComputer) {
            scorePlayer > scoreComputer ? result_div.textContent = "Game Over. Player Wins!"
            : scorePlayer === scoreComputer ? result_div.textContent = "Game Over. It Was a Tie."
            : result_div.textContent = "Game Over. Compunter Wins!"
        }, 1);
    }
    scorePlayer = 0;
    scoreComputer = 0;
    gamesPlayed = 0;
    userScore_span.textContent = 0;
    computerScore_span.textContent = 0;
    result_div.textContent = "Let's Play";
}
