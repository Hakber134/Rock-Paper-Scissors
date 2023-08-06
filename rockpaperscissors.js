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
        roundWinnerDisplay.textContent = `The player wins`;
    } else if (result === "tie") {
        roundWinnerDisplay.textContent = `This round ended in a tie.`;
    } else if (result === "lose") {
        roundWinnerDisplay.textContent = `The computer wins`;
    }
    return result;
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i=0; i < 5 && playerWins < 3 && computerWins < 3; i++) {
        const result = playRound();

        if (result === "win"){
            playerWins++;
        } else if (result === "lose") {
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        console.log("Congrats! Player has won the best of 5!");
    } else if (computerWins > playerWins) {
        console.log("The computer won the best of 5!");
    } else {
        console.log("The best of 5 ended in a tie!");
    }
}



const rockButton = document.querySelector('#Rock');
rockButton.addEventListener('click', () => {
    playRound('Rock');
});

const paperButton = document.querySelector('#Paper');
paperButton.addEventListener('click', () => {
    playRound('Paper');
});

const scissorsButton = document.querySelector('#Scissors');
scissorsButton.addEventListener('click', () => {
    playRound('Scissors');
});

