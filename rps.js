// Return a randomized rps//

function getComputerChoice (){
    const computerChoice = Math.random() * 3;
    if (computerChoice <= 1) {
        return "rock";
    } else if (computerChoice <= 2) {
        return"paper";
    } else {
        return "scissors";
    }
}

// Return Human Choice

function getHumanChoice (){
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}

// Declare the player's score variable //
let humanScore = 0;
let computerScore = 0;

// game logic//
function playRound(humanChoice, computerChoice) {
    let winner;

    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock") {
        winner = "human";
        console.log("Human Wins!");
    } else if (humanChoice === computerChoice) {
        winner = "no one";
        console.log("It's a Tie!");
    } else {
        winner = "computer";
        console.log("Computer Wins!");
    }

    // Update scores
    if (winner === "human") {
        humanScore += 1;
        console.log(`Human Score: ${humanScore}`);
    } else if (winner === "computer") {
        computerScore += 1;
        console.log(`Computer Score: ${computerScore}`);
    } else {
        console.log("It's a tie round.");
    }
}

// play the entire game //
function playGame(){
    for (let i = 1; i<= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
     if (humanScore > computerScore) {
        console.log(`Human Wins! Final Score: Human: ${humanScore} - Computer: ${computerScore}`);
    } else if (computerScore > humanScore){
        console.log(`Computer Wins! Final Score: Computer: ${computerScore} - Human: ${humanScore}`);
    } else {console.log("It's a Tie!")};
}


playGame(); 



