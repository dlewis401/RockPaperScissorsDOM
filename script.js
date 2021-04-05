function computerSelection() {
const computerPlay = ["Rock", "Paper", "Scissors"];
let computerChoice = computerPlay[Math.floor(Math.random()*computerPlay.length)];

let computerMessages = document.querySelector('.computerChose');

computerMessages.textContent = computerChoice;

return computerChoice;

}

function playRound() {
    const computerSelect = computerSelection();

    // SCORES
    let playerScore = document.querySelector('.playerScore');
    let playerScoreCount = parseInt(playerScore.textContent);
    console.log(playerScoreCount);

    // ROCK
    const rockOption = document.querySelector('#rock');
};

playRound();