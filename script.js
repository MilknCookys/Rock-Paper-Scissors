// Create variables for score
let computerScore = 0;
let playerScore = 0;

// Generates signal by assigning a signal value to random number between 1-3
function createComputerSignal() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  console.log(randomNumber);

  let signal;

  switch (randomNumber) {
    case 1:
      signal = "Rock";
      break;

    case 2:
      signal = "Paper";
      break;

    case 3:
      signal = "Scissors";
      break;
  }

  // console.log(signal);

  return signal;
}

// function test() {
//   console.log(computerSignal);
// }

function clearDisplay() {
  const signalComparisonContainer = document.querySelector(
    "#signalComparisonContainer"
  );
  signalComparisonContainer.textContent = "";
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let playerSignal = "";

rock.addEventListener("click", () => {
  playerSignal = "Rock";
  console.log("Player chose Rock!");
  clearDisplay();
  computerChoice = createComputerSignal();
  displayComputerSignal(computerChoice);
  compareSignals(computerChoice, playerSignal);
  changeScore();
  winCheck();
});

paper.addEventListener("click", () => {
  playerSignal = "Paper";
  console.log("Player chose Paper!");
  clearDisplay();
  computerChoice = createComputerSignal();
  displayComputerSignal(computerChoice);
  compareSignals(computerChoice, playerSignal);
  changeScore();
  winCheck();
});

scissors.addEventListener("click", () => {
  playerSignal = "Scissors";
  console.log("Player chose Scissors!");
  clearDisplay();
  computerChoice = createComputerSignal();
  displayComputerSignal(computerChoice);
  compareSignals(computerChoice, playerSignal);
  changeScore();
  winCheck();
});

// This code displays the computer signal

function displayComputerSignal(computerChoice) {
  const computerSignal = document.createElement("p");
  computerSignal.setAttribute("id", "computerSignal");

  computerSignal.textContent = `Computer chose ${computerChoice}`;

  const signalComparisonContainer = document.querySelector(
    "#signalComparisonContainer"
  );
  signalComparisonContainer.appendChild(computerSignal);
}

function compareSignals(computerSignal, playerSignal) {
  console.log(`computerSignal: ${computerSignal}`);
  console.log(`playerSignal: ${playerSignal}`);

  const winDisplay = document.createElement("p");
  winDisplay.setAttribute("id", "winDisplay");

  if (playerSignal === computerSignal) {
    winDisplay.textContent = `Player chose ${playerSignal}
     and computer chose ${computerSignal}. No points were won.`;
  } else if (playerSignal === "Rock" && computerSignal === "Scissors") {
    winDisplay.textContent = `${playerSignal} beats ${computerSignal}`;
    playerScore++;
  } else if (playerSignal === "Paper" && computerSignal === "Rock") {
    winDisplay.textContent = `${playerSignal} beats ${computerSignal}`;
    playerScore++;
  } else if (playerSignal === "Scissors" && computerSignal === "Paper") {
    winDisplay.textContent = `${playerSignal} beats ${computerSignal}`;
    playerScore++;
  } else {
    winDisplay.textContent = `${computerSignal} beats ${playerSignal}`;
    computerScore++;
  }

  const signalComparisonContainer = document.querySelector(
    "#signalComparisonContainer"
  );

  signalComparisonContainer.appendChild(winDisplay);
}

function changeScore() {
  const playerScoreElement = document.getElementById("playerScore");
  const computerScoreElement = document.getElementById("computerScore");

  console.log(playerScoreElement);

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function winCheck() {
  if (playerScore === 5 || computerScore === 5) {
    console.log("Stop");
  } else {
    console.log("Continue");
  }
}
