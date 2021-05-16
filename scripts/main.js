const buttons = document.querySelectorAll('.player-choice-btn');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

buttons.forEach(button => button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice());
}));

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][randomNumber];
}

function playRound(playerChoice, computerChoice) {
    switch(true) {
        case playerChoice === "rock" && computerChoice === "rock":
            break;
        case playerChoice === "rock" && computerChoice === "paper":
            computerScore.textContent = (Number(computerScore.textContent) + 1).toString();
            break;
        case playerChoice === "rock" && computerChoice === "scissors":
            playerScore.textContent = (Number(playerScore.textContent) + 1).toString();
            break;
        case playerChoice === "paper" && computerChoice === "rock":
            playerScore.textContent = (Number(playerScore.textContent) + 1).toString();
            break;
        case playerChoice === "paper" && computerChoice === "paper":
            break;
        case playerChoice === "paper" && computerChoice === "scissors":
            computerScore.textContent = (Number(computerScore.textContent) + 1).toString();
            break;
        case playerChoice === "scissors" && computerChoice === "rock":
            computerScore.textContent = (Number(computerScore.textContent) + 1).toString();
            break;
        case playerChoice === "scissors" && computerChoice === "paper":
            playerScore.textContent = (Number(playerScore.textContent) + 1).toString();
            break;
        case playerChoice === "scissors" && computerChoice === "scissors":
            break;
}   }
