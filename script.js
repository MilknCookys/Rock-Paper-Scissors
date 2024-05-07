// Create variables for score
let computerScore = 0;
let playerScore = 0;

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
