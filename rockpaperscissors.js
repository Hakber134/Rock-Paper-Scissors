function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    computerSelection = choices[randomIndex]
    return computerSelection;
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
    return outcomes[playerSelection, computerSelection];
}