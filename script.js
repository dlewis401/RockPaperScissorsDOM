let computerMessages = document.querySelector('.computerChose');
let playerOption = document.querySelector('.playerMessage');
let tieMessages = document.querySelector('.tieMessage');

    // SCORES
    let playerScore = document.querySelector('.playerScore');
    let playerScoreCount = parseInt(playerScore.textContent);

    // COMPUTER SCORE
    let computerScore = document.querySelector('.computerScore');
    let computerScoreCount = parseInt(computerScore.textContent);


function computerSelection() {
const computerPlay = ["Rock", "Paper", "Scissors"];
let computerChoice = computerPlay[Math.floor(Math.random()*computerPlay.length)];

computerMessages.textContent = computerChoice;

return computerChoice;

}

function playRound() {
    // ROCK
    const rockOption = document.querySelector('#rock');

    rockOption.addEventListener('click', function rockButton() {
        playerOption.textContent = "Rock";

        const computerSelect = computerSelection();

        if (computerMessages.textContent == "Rock" && playerOption.textContent == "Rock") {
            tieMessages.textContent = "Uh oh! You and the Computer got Rock! Try again!"
            tieMessages.style = "color: red;"
        }

        if (computerMessages.textContent == "Paper" && playerOption.textContent == "Rock") {
            tieMessages.textContent = "Computer wins - try again!"
            tieMessages.style = "color: red;"
            computerScore.textContent = computerScoreCount++;
        }

        if (computerMessages.textContent == "Scissors" && playerOption.textContent == "Rock") {
            tieMessages.textContent = "Player wins - well done!"
            tieMessages.style = "color: green;"
            playerScore.textContent = playerScoreCount++;
        }

        

    });

        // PAPER
    const paperOption = document.querySelector('#paper');

    paperOption.addEventListener('click', function paperButton() {
        playerOption.textContent = "Paper";

        const computerSelect = computerSelection();

        if (computerMessages.textContent == "Paper" && playerOption.textContent == "Paper") {
            tieMessages.textContent = "Uh oh! You and the Computer got Paper! Try again!"
            tieMessages.style = "color: red;"
        }

        if (computerMessages.textContent == "Rock" && playerOption.textContent == "Paper") {
            tieMessages.textContent = "Player wins - well done!"
            tieMessages.style = "color: green;"
            playerScore.textContent = playerScoreCount++;
        }

        if (computerMessages.textContent == "Scissors" && playerOption.textContent == "Paper") {
            tieMessages.textContent = "Computer wins - try again!"
            tieMessages.style = "color: red;"
            computerScore.textContent = computerScoreCount++;
        }
        
    });

     // SCISSORS
     const scissorsOption = document.querySelector('#scissors');

     scissorsOption.addEventListener('click', function scissorsButton() {
         playerOption.textContent = "Scissors";
 
         const computerSelect = computerSelection();
 
         if (computerMessages.textContent == "Scissors" && playerOption.textContent == "Scissors") {
             tieMessages.textContent = "Uh oh! You and the Computer got Scissors! Try again!"
             tieMessages.style = "color: red;"
         }

         if (computerMessages.textContent == "Rock" && playerOption.textContent == "Scissors") {
            tieMessages.textContent = "Player wins - well done!"
            tieMessages.style = "color: green;"
            playerScore.textContent = playerScoreCount++;
        }

        if (computerMessages.textContent == "Paper" && playerOption.textContent == "Scissors") {
            tieMessages.textContent = "Player wins - well done!"
            tieMessages.style = "color: green;"
            playerScore.textContent = playerScoreCount++;
        }
        

     });

    }


/*
function winnerDeclaration() {
    if (computerScore.textContent == "5") {
        tieMessages.textContent = "You lost to the Computer - try again!"
            tieMessages.style = "color: red;"
    } else {
        tieMessages.textContent = "You won - well done!"
        tieMessages.style = "color: green;"  
    }
}

*/



function game(computerScore, playerScore) {
    playRound();
}

game();