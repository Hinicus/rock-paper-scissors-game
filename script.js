console.log("Hello Word!");
//JAVASCRIPT ROCK, PAPER, SCISSORS!
//Initialize variables (Human score and Computer score)
//Get the computer choice that returns Rock, paper, scissors
//Get the human choice
//Check the condition for each round: scissors beats paper, paper beats rock, rock beats scissors

//Get reference of the buttons
let rpsButton = document.querySelectorAll("button");
let numberOfRounds = 0;
let humanScore = 0;
let computerScore = 0;

//Using forEach () to only use one event listener
rpsButton.forEach((button) => {
  button.addEventListener("click", () => {
    let winnerOrLoser = playRound(
      button.getAttribute("id").toLowerCase(),
      getComputerChoice(),
    );

    if (winnerOrLoser === "winner") {
      humanScore++;
    } else if (winnerOrLoser === "loser") {
      computerScore++;
    }

    numberOfRounds++;

    if (numberOfRounds === 5) {
      playGame(humanScore, computerScore);
    }
  });
});

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1); //Generate a number between 0 to 4 and floor rounding.
  //evaluate computerChoice to return either rock, paper, scissors
  switch (computerChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      "Error! Number is greater than 4 or less than 1";
  }
}

function playGame(humanScore, computerScore) {
  //Declare winne1 if (numberOfRounds === 5) {
  //Human wins
  if (humanScore > computerScore) {
    console.log(
      "The human wins! Final Score: \nComputer: " +
        computerScore +
        "\n" +
        "Human: " +
        humanScore,
    );
    //Computer Wins
  } else if (computerScore > humanScore) {
    console.log(
      "The computer wins! Final Score: \n Computer: " +
        computerScore +
        "\n" +
        "Human: " +
        humanScore,
    );
  } else {
    //scores are tied
    console.log(
      "It's a Tie!!! Final Score: \n Computer: " +
        computerScore +
        "\n" +
        "Human: " +
        humanScore,
    );
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase(); //sets case-insensitivity
  //Evaluating each plays
  if (humanChoice == "scissors" && computerChoice == "paper") {
    //scissors beats paper
    console.log("You win! " + humanChoice + " beats " + computerChoice);
    return "winner";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    //paper beats rock
    console.log("You win! " + humanChoice + " beats " + computerChoice);
    return "winner";
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    //rock beats scissors
    console.log("You win! " + humanChoice + " beats " + computerChoice);
    return "winner";
  } else if (humanChoice === computerChoice) {
    //incase of a tie
    console.log("TIE!!!");
  } else {
    //computer wins
    console.log("You Lose! " + computerChoice + " beats " + humanChoice);
    return "loser";
  }
}
