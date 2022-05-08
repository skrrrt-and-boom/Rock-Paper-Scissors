const results = document.querySelector(".results");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const h2 = document.createElement("h2");

// clearing screen
function clearPoints() {
  results.removeChild(para1);
  results.removeChild(para2);
}

let computerSelection = computerPlay();
let wins = 0;
let losses = 0;

// clearing animation
function ani3_clear() {
  const ani3 = document.querySelector("h2");
  ani3.addEventListener("animationend", () => {
    results.removeChild(ani3);
  });
}

function reset() {
  if (wins + losses === 5) {
    if (wins > losses) {
      clearPoints();
      h2.innerHTML = "You win in <span>5</span> rounds";
      results.appendChild(h2);
      ani3_clear();
    } else {
      clearPoints();
      h2.innerHTML = "You lost in <span>5</span> rounds";
      results.appendChild(h2);
      ani3_clear();
    }
    return [wins -= wins, losses -= losses];
  }
}

function game() {
      let imgs = document.querySelectorAll("img");
      imgs.forEach((img) => {
        img.addEventListener("click", () => {
          if (img.id) {
            let computerSelection = computerPlay();
            playRound(img.id, computerSelection);
            para1.textContent = `You have ${wins} points`;
            para2.textContent = `Computer have ${losses} points`;
            results.appendChild(para1);
            results.appendChild(para2);
            reset();
          }
        });
      });
  }
// Checking
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    console.log("You win, amazing");
    wins += 1;
  } else {
    console.log("You loose;{");
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

// animation delate

const body = document.querySelector("body");
const ani2 = document.querySelector(".animated-text");
ani2.addEventListener("animationend", () => {
  body.removeChild(ani2);
});
