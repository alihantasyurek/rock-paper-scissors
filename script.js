const choices = ["rock", "paper", "scissors"]
let humanScore = 0;
let computerScore = 0;


alert("The game is played through the console press F12 and click on console before starting, The game also will be 5 rounds. Good luck have fun!")

//getComputerChoice will randomly return: “rock”, “paper” or “scissors”.
function getComputerChoice() {
  rndIndex = Math.floor(Math.random() * 3); // give a random index between 0-2
  return choices[rndIndex];
}

//get user input
function getHumanChoice() {
  let input = prompt("Choose: Rock, Paper, Scissors")?.trim().toLowerCase();
  if (input === undefined) {
    throw new Error("User canceled the prompt");
  }
  for (let i = 0; i < 3; i++)
    if (input === choices[i])
      return choices[i];
  return false;
}

// Eliminate input concerns
function getValidHumanInput() {
  let humanChoice = getHumanChoice();

  while (humanChoice === false) {
    alert("The choice is not available")
    humanChoice = getHumanChoice();
  }
  return humanChoice;
}

// make the first char upper case
function capitilize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// The actual game
function playRound(humanChoice, computerChoice) {
  // you either win or lose or draw
  if (humanChoice == computerChoice) {
    console.log("It's a tie!")
    return;
  }

  if ((humanChoice === "rock" && computerChoice === "scissors")
    || (humanChoice === "paper" && computerChoice === "rock")
    || (humanChoice === "scissors" && computerChoice === "paper")) {
    console.log(`You win! ${capitilize(humanChoice)} beats ${capitilize(computerChoice)}`)
    humanScore++;
  } else {
    console.log(`You lose! ${capitilize(computerChoice)} beats ${capitilize(humanChoice)}`)
    computerScore++;
  }
  console.log(`Your score: ${humanScore} Computer's score: ${computerScore} `)
}

for (let i = 0; i < 5; i++) {
  let humanChoice = getValidHumanInput();
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}
