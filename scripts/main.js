const playerChoiceButtons = document.querySelectorAll('.player-choice-btn');

const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

const playerRoundWinMessages = ['Nice one! Keep it up.', 'Holy cow! How did you do that?!', 'You didn\'t even break a sweat! Good job!'];
const computerRoundWinMessages = ['Uh oh. Who turned on the lag switch?', 'Yikes! You really flopped that one.', 'There\'s always next time...'];
const roundDrawMessages = ['Stalemate.', 'Looks like we got ourselves a good ol\' fashioned stand off...', 'When an unstoppable force meets an immovable object...'];

const resultNotification = document.querySelector('#result-notification');

const rockChoiceIndicator = document.querySelector('#rock-choice-indicator');
const paperChoiceIndicator = document.querySelector('#paper-choice-indicator');
const scissorsChoiceIndicator = document.querySelector('#scissors-choice-indicator');
const choiceIndicators = [rockChoiceIndicator, paperChoiceIndicator, scissorsChoiceIndicator];

const computerIcon = '<i class="bi bi-cpu-fill"></i>';
const playerIcon = '<i class="bi bi-person-fill"></i>';

const resetButton = document.querySelector('#reset-btn');

playerChoiceButtons.forEach(button => button.addEventListener('click', () => {
    playRound(button.id, random(['rock', 'paper', 'scissors']));
}));

resetButton.addEventListener('click', resetScores);

function random(array) {
    randomNumber = Math.floor(Math.random() * 3);
    return array[randomNumber];
}

function setAlertWarning(alert) {
    resultNotification.classList.remove('alert-danger');
    resultNotification.classList.remove('alert-success');
    resultNotification.classList.add('alert-warning');
}

function setAlertDanger(alert) {
    resultNotification.classList.remove('alert-warning');
    resultNotification.classList.remove('alert-success');
    resultNotification.classList.add('alert-danger');
}

function setAlertSuccess(alert) {
    resultNotification.classList.remove('alert-danger');
    resultNotification.classList.remove('alert-warning');
    resultNotification.classList.add('alert-success');
}

function addChildIcon(parent, iconHTML) {
    parent.insertAdjacentHTML('beforeend', iconHTML);
}

function removeChildIcon(parent) {
    parent.innerHTML = '';
}

function resetEachInnerHTML(array) {
    array.forEach(element => element.innerHTML = '');
}

function resetScores() {
    playerScore.textContent = '0';
    computerScore.textContent = '0';
}

function playRound(playerChoice, computerChoice) {
    resultNotification.classList.remove('alert-info');

    switch(true) {
        case playerChoice === 'rock' && computerChoice === 'rock':
            resultNotification.textContent = random(roundDrawMessages);
            setAlertWarning(resultNotification);
            resetEachInnerHTML(choiceIndicators);
            addChildIcon(rockChoiceIndicator, playerIcon);
            addChildIcon(rockChoiceIndicator, computerIcon);
            break;
        case playerChoice === 'rock' && computerChoice === 'paper':
            computerScore.textContent = (Number(computerScore.textContent) + 1).toString();
            resultNotification.textContent = random(computerRoundWinMessages);
            setAlertDanger(resultNotification);
            resetEachInnerHTML(choiceIndicators);
            addChildIcon(rockChoiceIndicator, playerIcon);
            addChildIcon(paperChoiceIndicator, computerIcon);
            break;
        case playerChoice === 'rock' && computerChoice === 'scissors':
            playerScore.textContent = (Number(playerScore.textContent) + 1).toString();
            resultNotification.textContent = random(playerRoundWinMessages);
            setAlertSuccess(resultNotification);
            resetEachInnerHTML(choiceIndicators);
            addChildIcon(rockChoiceIndicator, playerIcon);
            addChildIcon(scissorsChoiceIndicator, computerIcon);
            break;
        case playerChoice === 'paper' && computerChoice === 'rock':
            playerScore.textContent = (Number(playerScore.textContent) + 1).toString();
            resultNotification.textContent = random(playerRoundWinMessages);
            setAlertSuccess(resultNotification);
            resetEachInnerHTML(choiceIndicators);
            addChildIcon(paperChoiceIndicator, playerIcon);
            addChildIcon(rockChoiceIndicator, computerIcon);
            break;
        case playerChoice === 'paper' && computerChoice === 'paper':
            resultNotification.textContent = random(roundDrawMessages);
            setAlertWarning(resultNotification);
            resetEachInnerHTML(choiceIndicators);
            addChildIcon(paperChoiceIndicator, playerIcon);
            addChildIcon(paperChoiceIndicator, computerIcon);
            break;
        case playerChoice === 'paper' && computerChoice === 'scissors':
            computerScore.textContent = (Number(computerScore.textContent) + 1).toString();
            resultNotification.textContent = random(computerRoundWinMessages);
            setAlertDanger(resultNotification);
            resetEachInnerHTML(choiceIndicators);
            addChildIcon(paperChoiceIndicator, playerIcon);
            addChildIcon(scissorsChoiceIndicator, computerIcon);
            break;
        case playerChoice === 'scissors' && computerChoice === 'rock':
            computerScore.textContent = (Number(computerScore.textContent) + 1).toString();
            resultNotification.textContent = random(computerRoundWinMessages);
            setAlertDanger(resultNotification);
            resetEachInnerHTML(choiceIndicators);
            addChildIcon(scissorsChoiceIndicator, playerIcon);
            addChildIcon(rockChoiceIndicator, computerIcon);
            break;
        case playerChoice === 'scissors' && computerChoice === 'paper':
            playerScore.textContent = (Number(playerScore.textContent) + 1).toString();
            resultNotification.textContent = random(playerRoundWinMessages);
            setAlertSuccess(resultNotification);
            resetEachInnerHTML(choiceIndicators);
            addChildIcon(scissorsChoiceIndicator, playerIcon);
            addChildIcon(paperChoiceIndicator, computerIcon);
            break;
        case playerChoice === 'scissors' && computerChoice === 'scissors':
            resultNotification.textContent = random(roundDrawMessages);
            setAlertWarning(resultNotification);
            resetEachInnerHTML(choiceIndicators);
            addChildIcon(scissorsChoiceIndicator, playerIcon);
            addChildIcon(scissorsChoiceIndicator, computerIcon);
            break;
}   }
