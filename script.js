const choices = ["rock", "paper", "scissors"]
let humanScore = 0;
let computerScore = 0;
const MAXPOINT = 5;
let gameOver = false;

const playAgainBtn = document.querySelector("#playAgainBtn");
playAgainBtn.classList.toggle("hidden");

function getComputerChoice() {
  rndIndex = Math.floor(Math.random() * 3); // give a random index between 0-2
  return choices[rndIndex];
}

// make the first char upper case
function capitilize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// The actual game
function playRound(humanChoice, computerChoice) {
  if (gameOver) return;
  const info = document.querySelector("#info");
  const resultMessage = document.querySelector("#resultMessage");
  info.textContent = `🧑: ${capitilize(humanChoice)} | 🤖: ${capitilize(computerChoice)} `

  if (humanChoice == computerChoice) {
    resultMessage.textContent = "It's a tie!";
    return;
  }

  if ((humanChoice === "rock" && computerChoice === "scissors")
    || (humanChoice === "paper" && computerChoice === "rock")
    || (humanChoice === "scissors" && computerChoice === "paper")) {
    resultMessage.textContent = `You win! ${capitilize(humanChoice)} beats ${capitilize(computerChoice)} `;
    humanScore++;
  } else {
    resultMessage.textContent = `You lose! ${capitilize(computerChoice)} beats ${capitilize(humanChoice)} `;
    computerScore++;
  }

  if (humanScore >= MAXPOINT || computerScore >= MAXPOINT) {
    gameOver = true;
    const finalResult = document.querySelector("#finalResult");
    finalResult.textContent = getWinner();
    playAgain();
    return;
  }
}

function playAgain() {
  const buttons = document.querySelectorAll("button");
  playAgainBtn.classList.remove("hidden");
  playAgainBtn.addEventListener("click", () => {
    playAgainBtn.classList.add("hidden");
    resetGame()
  })
}

function resetGame() {
  computerScore = 0;
  humanScore = 0;
  const human = document.querySelector("#humanScore")
  const computer = document.querySelector("#computerScore")

  human.textContent = "🧑 -> 0";
  computer.textContent = "🤖 -> 0";
  const resultMessage = document.querySelector("#resultMessage");
  resultMessage.textContent = "";
  const finalResult = document.querySelector("#finalResult");
  finalResult.textContent = "";
  const info = document.querySelector("#info");
  info.textContent = "Choose your sign to start";
  gameOver = false;
}

function getWinner() {
  let finalScore = "";
  finalScore += `Final Score -> You: ${humanScore} | Computer: ${computerScore} \n`;
  if (humanScore > computerScore) {
    finalScore += "🎉 Congratulations! You won the game!";
  } else if (computerScore > humanScore) {
    finalScore += "😞 Sorry, you lost the game.";
  } else {
    finalScore += "🤝 It's a tie game!";
  }
  return finalScore;
}

let humanChoice;
const possibility = document.querySelector("#possibility");
possibility.addEventListener("click", (e) => {
  const choice = e.target.dataset.choice;
  if (!choices.includes(choice)) {
    return;
  }
  humanChoice = choice;
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  displayResult();
});

function displayResult() {
  const human = document.querySelector("#humanScore")
  const computer = document.querySelector("#computerScore")
  human.textContent = "🧑 -> " + humanScore;
  computer.textContent = "🤖 -> " + computerScore;
}
