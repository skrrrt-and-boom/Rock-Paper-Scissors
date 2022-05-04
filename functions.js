let computerSelection = computerPlay();
let wins = 0;
let losses = 0;
function game() {
  for (let i = 0; i < 6; i++) {
    if (i < 5) {console.log(i);
    let computerSelection = computerPlay();
    let playerSelection = prompt("Rock, Paper or Scissors", "Rock Paper Scissors");
    console.log(playRound(playerSelection, computerSelection));
    } else {
      alert(`You have ${wins} wins and ${losses} losses.`)
    }
  }
}
// Checking
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    console.log("You win, amazing");
    alert("Win");
    wins += 1;
  } else {
    console.log("You loose;{");
    alert("Lose")
    losses += 1;
  }
}
//Computer choose
function computerPlay() {
  x = Math.random();
  console.log(x);
  if (x <= 0.3) {
    console.log("rock");
    return "rock";
  } else if (x <= 0.7) {
    console.log("paper");
    return "paper";
  } else {
    console.log("scissors");
    return "scissors";
  }
}
game();
