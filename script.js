let computerMessages = document.querySelector('.computerChose');
let playerOption = document.querySelector('.playerMessage');
let tieMessages = document.querySelector('.tieMessage');

    // SCORES
    let playerScore = document.querySelector('.playerScore');
    playerScoreCount = 0;

    // COMPUTER SCORE
    let computerScore = document.querySelector('.computerScore');
    computerScoreCount = 0;

    function updatePlayerScore() {
        playerScore.textContent = ++playerScoreCount;
    }

    function updateComputerScore() {
        computerScore.textContent = ++computerScoreCount;
    }


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
            updateComputerScore();
            tieMessages.textContent = "Computer wins - try again!"
            tieMessages.style = "color: red";
        }

        if (computerMessages.textContent == "Scissors" && playerOption.textContent == "Rock") {
            updatePlayerScore();
            tieMessages.textContent = "Player wins - well done!"
            tieMessages.style = "color: green;"
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
            updatePlayerScore();
            tieMessages.textContent = "Player wins - well done!"
            tieMessages.style = "color: green;"
        }

        if (computerMessages.textContent == "Scissors" && playerOption.textContent == "Paper") {
            updateComputerScore();
            tieMessages.textContent = "Computer wins - try again!"
            tieMessages.style = "color: red;"
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
            updatePlayerScore();
            tieMessages.textContent = "Player wins - well done!"
            tieMessages.style = "color: green;"
        }

        if (computerMessages.textContent == "Paper" && playerOption.textContent == "Scissors") {
            updateComputerScore();
            tieMessages.textContent = "Player wins - well done!"
            tieMessages.style = "color: green;"
            
        }


            winnerDeclaration();

     });

    }

    function winnerDeclaration() {
        if (computerScore.textContent == "5") {
            playerScoreCount = 0;
            computerScoreCount = 0;
            computerScore.textContent = computerScoreCount;
            playerScore.textContent = playerScoreCount;
            tieMessages.textContent = "You lost to the Computer - try again!"
            tieMessages.style = "color: red;"
        } 
        
        if (playerScore.textContent == "5") {
            playerScoreCount = 0;
            computerScoreCount = 0;
            computerScore.textContent = computerScoreCount;
            playerScore.textContent = playerScoreCount;
            tieMessages.textContent = "You won - well done!"
            tieMessages.style = "color: green;" 
        }

        
    
    }
playRound();