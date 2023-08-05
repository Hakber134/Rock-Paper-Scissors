function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex]
}

function getPlayerChoice(){
    let playerSelection = prompt("Enter your choice (rock, paper, scissors): ");
    return playerSelection.toLowerCase();
}

function determineWinner(playerSelection, computerSelection){
    let outcomes = {
        rock: {rock: "tie", paper: "lose", scissors: "win" },
        paper: {rock: "win", paper: "tie", scissors: "lose"},
        scissors: {rock: "lose", paper: "win", scissors: "tie"}
    };
    return outcomes[playerSelection.toLowerCase()][computerSelection.toLowerCase()];
}

function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const result = determineWinner(playerSelection, computerSelection);
    
    if (result === "win") {
        console.log("Player wins!");
    } else if (result === "tie") {
        console.log("It's a tie! Try again.");
    } else if (result === "lose") {
        console.log("Computer wins!");
    }
    return result;
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    /*for (let i=0; i < 5 && playerWins < 3 && computerWins < 3; i++) {
        const result = playRound();

        if (result === "win"){
            playerWins++;
        } else if (result === "lose") {
            computerWins++;
        }
    }*/

    if (playerWins > computerWins) {
        console.log("Congrats! Player has won the best of 5!");
    } else if (computerWins > playerWins) {
        console.log("The computer won the best of 5!");
    } else {
        console.log("The best of 5 ended in a tie!");
    }
}

const rockButton = document.querySelector('button.rock');
rockButton.addEventListener('click', () => {
    playRound('rock');
});

const paperButton = document.querySelector('button.paper');
paperButton.addEventListener('click', () => {
    playRound('paper');
});

const scissorsButton = document.querySelector('button.scissors');
scissorsButton.addEventListener('click', () => {
    playRound('scissors');
});

game();