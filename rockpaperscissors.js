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
}

function game() {
    for (let i=0; i<5; i++) {
        playRound();
    }
}

game();