const choices = ["rock", "paper", "scissors"]
let humanScore = 0;
let computerScore = 0;
const MAXPOINT = 5;

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
  const resultMessage = document.querySelector("#resultMessage");
  const showHumanChoice = document.querySelector("#humanChoice");
  const showComputerChoice = document.querySelector("#computerChoice");
  showHumanChoice.textContent = `🧑 You: ${capitilize(humanChoice)}`;
  showComputerChoice.textContent = `🤖 Computer: ${capitilize(computerChoice)}`;

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
    const finalResult = document.querySelector("#finalResult");
    finalResult.textContent = getWinner();
    playAgain();
    return;
  }
}

function playAgain() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((elem) => elem.classList.add("hidden"));
  const playAgain = document.createElement("button");
  playAgain.textContent = "Play Again?";
  const choice = document.querySelector("#choice");
  choice.appendChild(playAgain);
  playAgain.addEventListener("click", () => {
    playAgain.remove();
    buttons.forEach((elem) => elem.classList.remove("hidden"));
    resetGame()
  })
}

function resetGame() {
  computerScore = 0;
  humanScore = 0;
  const result = document.querySelector("#result");
  result.firstElementChild.textContent = "🧑 -> 0";
  result.lastElementChild.textContent = "🤖 -> 0";
  const resultMessage = document.querySelector("#resultMessage");
  resultMessage.textContent = "";
  const showHumanChoice = document.querySelector("#humanChoice");
  showHumanChoice.textContent = "";
  const showComputerChoice = document.querySelector("#computerChoice");
  showComputerChoice.textContent = "";
  const finalResult = document.querySelector("#finalResult");
  finalResult.textContent = "";
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
  const id = e.target.id;
  switch (id) {
    case "rock":
      humanChoice = id;
      break;
    case "paper":
      humanChoice = id;
      break;
    case "scissors":
      humanChoice = id;
      break;
    default:
      break;
  }
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  const result = document.querySelector("#result");
  result.firstElementChild.textContent = "🧑 -> " + humanScore;
  result.lastElementChild.textContent = "🤖 -> " + computerScore;
});
