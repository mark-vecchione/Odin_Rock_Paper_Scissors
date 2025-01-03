// Declare the player's score variables
let humanScore = 0;
let computerScore = 0;

// Return a randomized computer choice of Rock, Paper, or Scissors
function getComputerChoice() {
  const rnd = Math.random() * 3;
  if (rnd < 1) {
    return "rock";
  } else if (rnd < 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Plays a single round of RPS
function playRound(humanChoice, computerChoice) {
  let winner = "";

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    winner = "human";
    humanScore++;
  } else if (humanChoice === computerChoice) {
    winner = "tie";
  } else {
    winner = "computer";
    computerScore++;
  }

  updateDisplay(humanChoice, computerChoice, winner);
  checkWinner();
}

// Updates results text and score display in the DOM
function updateDisplay(humanChoice, computerChoice, winner) {
  const resultsDiv = document.getElementById("results");
  const scoreDiv = document.getElementById("score");

  if (winner === "human") {
    resultsDiv.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. You won this round!`;
  } else if (winner === "computer") {
    resultsDiv.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. Computer won this round!`;
  } else {
    resultsDiv.textContent = `You both chose ${humanChoice}. It's a tie!`;
  }

  scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

// Check if either side reached 5 points; if so, announce the winner
function checkWinner() {
  const resultsDiv = document.getElementById("results");
  if (humanScore === 5) {
    resultsDiv.textContent = "You reached 5 points first! You win the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultsDiv.textContent = "Computer reached 5 points first! Computer wins the game!";
    disableButtons();
  }
}

// Disable the RPS buttons once someone wins
function disableButtons() {
  document.getElementById("rockBtn").disabled = true;
  document.getElementById("paperBtn").disabled = true;
  document.getElementById("scissorsBtn").disabled = true;
}

// Hook up event listeners to the buttons
document.getElementById("rockBtn").addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

document.getElementById("paperBtn").addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

document.getElementById("scissorsBtn").addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
