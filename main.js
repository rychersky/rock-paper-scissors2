function getPlayerChoice() {
  let choice = prompt("Please enter either 'rock', 'paper', or 'scissors'");
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt("Please enter either 'rock', 'paper', or 'scissors'");
  }
  return choice[0].toUpperCase() + choice.slice(1);
}

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const selections = `You chose ${playerSelection}, the computer chose ${computerSelection}.`;
  const TIE = `It's a tie! ${selections}`;
  const WIN = `Congratulations, you win! ${selections}`;
  const LOSE = `Oh no, you lost! ${selections}`;

  if (playerSelection === "Rock") {
    switch (computerSelection) {
      case "Rock":
        return TIE;
      case "Paper":
        return LOSE;
      case "Scissors":
        return WIN;
    }
  } else if (playerSelection === "Paper") {
    switch (computerSelection) {
      case "Rock":
        return WIN;
      case "Paper":
        return TIE;
      case "Scissors":
        return LOSE;
    }
  } else {
    switch (computerSelection) {
      case "Rock":
        return LOSE;
      case "Paper":
        return WIN;
      case "Scissors":
        return TIE;
    }
  }
}

function game() {
  console.log(playRound(getPlayerChoice(), getComputerChoice()));
  console.log(playRound(getPlayerChoice(), getComputerChoice()));
  console.log(playRound(getPlayerChoice(), getComputerChoice()));
  console.log(playRound(getPlayerChoice(), getComputerChoice()));
  console.log(playRound(getPlayerChoice(), getComputerChoice()));
}
