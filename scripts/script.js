console.log("ROCK, PAPERS AND SCISSORS");
console.log("OPTIONS:");
console.log("(1) Rock");
console.log("(2) Paper");
console.log("(3) Scissors");
console.log("Type your choice (only number):");

function getComputerChoice() {

  let result;
  let num = Math.random();
  console.log(num);

  if (num<=1/3) {
    result = 'rock';
  } else if (num<=2/3) {
    result = 'paper';
  } else {
    result = 'scissors';
  }
  return result;
}

function getHumanChoice() {
  return prompt(`OPTIONS:
  Type your choice:`);

}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice == 'rock') {

    switch (computerChoice) {
      case 'rock':
        console.log('Computer chose ROCK');
        console.log("It's a DRAW!");
        break;
      
      case 'paper':
        console.log('Computer chose PAPER');
        console.log("You LOSE! Paper beats Rock.");
        computerScore++;
        break;

      case 'scissors':
        console.log('Computer chose SCISSORS');
        console.log("You WIN! Rock beats Scissors.");
        humanScore++;
        break;
    }
  } else if (humanChoice == 'paper') {

    switch (computerChoice) {
      case 'paper':
        console.log('Computer chose PAPER');
        console.log("It's a DRAW!");
        break;
      
      case 'scissors':
        console.log('Computer chose SCISSORS');
        console.log("You LOSE! Scissors beats Paper.");
        computerScore++;
        break;

      case 'rock':
        console.log('Computer chose ROCK');
        console.log("You WIN! Paper beats Rock.");
        humanScore++;
        break;
    }
  } else if (humanChoice == 'scissors') {

    switch (computerChoice) {
      case 'paper':
        console.log('Computer chose PAPER');
        console.log("It's a WIN! Scissors beats Paper.");
        humanScore++;
        break;
      
      case 'scissors':
        console.log('Computer chose SCISSORS');
        console.log("It's a DRAW!");
        break;

      case 'rock':
        console.log('Computer chose ROCK');
        console.log("You LOSE! Rock beats Scissors.");
        computerScore++;
        break;
    }
  } else {
    console.log('Type a Valid Option');

  }
}

const pc = getComputerChoice();
const human = getHumanChoice();

playRound(human, pc);
