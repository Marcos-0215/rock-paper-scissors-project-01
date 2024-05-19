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
  return prompt("Type your choice:");

}


