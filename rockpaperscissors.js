function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex]
}

/* not needed for the UI implementation
function getPlayerChoice(){
    let playerSelection = prompt("Enter your choice (rock, paper, scissors): ");
    return playerSelection.toLowerCase();
}*/

function determineWinner(playerSelection, computerSelection){
    let outcomes = {
        rock: {rock: "tie", paper: "lose", scissors: "win" },
        paper: {rock: "win", paper: "tie", scissors: "lose"},
        scissors: {rock: "lose", paper: "win", scissors: "tie"}
    };
    return outcomes[playerSelection.toLowerCase()][computerSelection.toLowerCase()];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = determineWinner(playerSelection, computerSelection);

    const playerChoiceDisplay = document.querySelector('#player-choice');
    playerChoiceDisplay.textContent = `Player's Choice: ${playerSelection}`;

    const computerChoiceDisplay = document.querySelector('#computer-choice');
    computerChoiceDisplay.textContent = `Computer's Choice: ${computerSelection}`;

    const roundWinnerDisplay = document.querySelector('#round-winner-display');    
    if (result === "win") {
        roundWinnerDisplay.textContent = `Player won this round.`;
        playerWins++;
    } else if (result === "tie") {
        roundWinnerDisplay.textContent = `This round ended in a tie.`;
    } else if (result === "lose") {
        roundWinnerDisplay.textContent = `Computer won this round.`;
        computerWins++;
    }
    playerWinsDisplay.textContent=playerWins;
    computerWinsDisplay.textContent=computerWins;
    announceWinner();
    
    if(playerWins === 5 || computerWins === 5){
        return;
    }
    return result;
}


function announceWinner() {
    const matchWinnerDisplay = document.querySelector('#match-winner-display');    
    if (playerWins === 5) {
        matchWinnerDisplay.textContent = `PLAYER WON THE MATCH!`;
    } else if (computerWins === 5) {
        matchWinnerDisplay.textContent = `COMPUTER WON THE MATCH!`;
    }
}


let playerWins = 0;
let computerWins = 0;

const rockButton = document.querySelector('#Rock');
rockButton.addEventListener('click', () => {
    if (playerWins < 5 && computerWins < 5) {
        playRound('Rock');
    }
});

const paperButton = document.querySelector('#Paper');
paperButton.addEventListener('click', () => {
    if (playerWins < 5 && computerWins < 5) {
        playRound('Paper');
    }
});

const scissorsButton = document.querySelector('#Scissors');
scissorsButton.addEventListener('click', () => {
    if (playerWins < 5 && computerWins < 5) {
        playRound('Scissors');
    }
});

const playerWinsDisplay = document.querySelector('#player-wins');

const computerWinsDisplay = document.querySelector('#computer-wins');

const resetButton = document.querySelector("#Reset")    
resetButton.addEventListener('click', ()=>{
    playerWins = 0;
    computerWins = 0;

    playerWinsDisplay.textContent = playerWins;
    computerWinsDisplay.textContent = computerWins;

    const matchWinnerDisplay = document.querySelector('#match-winner-display');
    matchWinnerDisplay.textContent = '';

    rockButton.removeAttribute('disabled');
    paperButton.removeAttribute('disabled');
    scissorsButton.removeAttribute('disabled');
});
