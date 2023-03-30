const game = {
  playerScore: 0,
  computerScore: 0,
};

const buttons = document.querySelectorAll("div.player-buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent, getComputerChoice());
  });
});

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function printRoundResults(str) {
  document.querySelector("p.round-results").textContent = str;
}

function updateScores(result) {
  switch (result) {
    case "win":
      game.playerScore++;
      break;
    case "lose":
      game.computerScore++;
      break;
    case "tie":
      break;
  }
  document.querySelector("p.player-score span").textContent =
    game.playerScore.toString();
  document.querySelector("p.computer-score span").textContent =
    game.computerScore.toString();
}

function checkIfGameEnded() {
  if (game.playerScore === 5 || game.computerScore === 5) {
    buttons.forEach((button) => button.setAttribute("disabled", ""));
    document.querySelector("h1").textContent =
      game.playerScore === 5
        ? "You win! Refresh page to play again."
        : "The computer wins! Refresh page to play again.";
  }
}

function playRound(playerSelection, computerSelection) {
  const selections = `You chose ${playerSelection}, the computer chose ${computerSelection}.`;
  const TIE = `It's a tie! ${selections}`;
  const WIN = `Congratulations, you win! ${selections}`;
  const LOSE = `Oh no, you lost! ${selections}`;

  if (playerSelection === "Rock") {
    switch (computerSelection) {
      case "Rock":
        printRoundResults(TIE);
        updateScores("tie");
        break;
      case "Paper":
        printRoundResults(LOSE);
        updateScores("lose");
        break;
      case "Scissors":
        printRoundResults(WIN);
        updateScores("win");
        break;
    }
  } else if (playerSelection === "Paper") {
    switch (computerSelection) {
      case "Rock":
        printRoundResults(WIN);
        updateScores("win");
        break;
      case "Paper":
        printRoundResults(TIE);
        updateScores("tie");
        break;
      case "Scissors":
        printRoundResults(LOSE);
        updateScores("lose");
        break;
    }
  } else {
    switch (computerSelection) {
      case "Rock":
        printRoundResults(LOSE);
        updateScores("lose");
        break;
      case "Paper":
        printRoundResults(WIN);
        updateScores("win");
        break;
      case "Scissors":
        printRoundResults(TIE);
        updateScores("tie");
        break;
    }
  }

  checkIfGameEnded();
}
