// Create variables for score

let computerScore;
let playerScore;

// Greets the user with their name
function greeting() {
  console.clear();

  const userName = prompt("What is your name");

  console.log(`Welcome to Rock Paper Scissors ${userName}!`);

  console.log(
    "Please choose between rock, paper, and scissors. The console will then randomly choose between rock, paper and scissors."
  );

  console.log(
    "Rock beats Scissors, Scissors beats Paper, and Paper beats Rock. Each round win will award a point."
  );

  console.log("First to five points wins the game.");
}

greeting();

// Generates signal by assigning a signal value to random number between 1-3
function createComputerSignal() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let signal;

  switch (randomNumber) {
    case 1:
      signal = "Rock";
      return signal;

    case 2:
      signal = "Paper";
      return signal;

    case 3:
      signal = "Scissors";
      return signal;
  }
}

// Temporary log for ease of testing
console.log(createComputerSignal());

function getPlayerSignal() {
  let playerPrompt = prompt('Please choose "Rock", "Paper", or "Scissors"');
  let playerSignal;

  switch (playerPrompt) {
    case "rock" || "Rock":
      playerSignal = "Rock";
      return playerSignal;

    case "paper" || "Paper":
      playerSignal = "Paper";
      return playerSignal;

    case "scissors" || "Scissors":
      playerSignal = "Scissors";
      return playerSignal;
  }
}

// Temporary log for ease of testing
console.log(getPlayerSignal());

// Evaluate who wins the point & create it
function modifyScore(computer, player) {
  switch ((computer, player)) {
    case computer === "Rock" && player === "Scissors":
      computerScore++;
      console.log(
        `The computer chose ${computer} and you chose ${player}. ${computer} beats ${player}, the computer has been awarded a point`
      );
      break;

    case computer === "Scissors" && player === "Paper":
      computerScore++;
      console.log(
        `The computer chose ${computer} and you chose ${player}. ${computer} beats ${player}, the computer has been awarded a point`
      );
      break;

    case computer === "Paper" && player === "Rock":
      computerScore++;
      console.log(
        `The computer chose ${computer} and you chose ${player}. ${computer} beats ${player}, the computer has been awarded a point`
      );
      break;

    default:
      `The computer chose ${computer} and you chose ${player}. ${computer} loses to ${player}, the player has been awarded a point`;
  }
}

modifyScore(createComputerSignal, getPlayerSignal);
