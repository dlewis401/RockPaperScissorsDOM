const computerPlay = ["Rock", "Paper", "Scissors"];
let computerSelection = computerPlay[Math.floor(Math.random()*computerPlay.length)];

let computerMessages = document.querySelector('.computerMessage');


let buttonPlayer = document.querySelector('.Rock');
let playerMessages = document.querySelector('.playerMessage')
buttonPlayer.addEventListener('click', function(){
    playerMessages.textContent = "Player Chose: Rock";
    computerMessages.textContent = 'Computer Chose: ' + computerSelection;
});
playerMessages.appendChild(buttonPlayer);

let buttonPlayer1 = document.querySelector('.Paper');
let playerMessages1 = document.querySelector('.playerMessage')
buttonPlayer1.addEventListener('click', function(){
    playerMessages1.textContent = "Player Chose: Paper";
    computerMessages.textContent = 'Computer Chose: ' + computerSelection;
});
playerMessages1.appendChild(buttonPlayer1);

let buttonPlayer2 = document.querySelector('.Scissors');
let playerMessages2 = document.querySelector('.playerMessage')
buttonPlayer2.addEventListener('click', function(){
    playerMessages2.textContent = "Player Chose: Scissors";
    computerMessages.textContent = 'Computer Chose: ' + computerSelection;
});
playerMessages2.appendChild(buttonPlayer2);

// TIE MESSAGE
