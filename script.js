"use stricts";
const buttons = document.querySelectorAll(".choice");
// const rock = document.querySelector(".choose.rock");
// const paper = document.querySelector(".choose.paper");
// const scissors = document.querySelector(".choose.scissors");
const playerScore = document.querySelector(".points-player");
const computerScore = document.querySelector(".points-computer");
const answers = document.querySelector(".answers");
const again = document.querySelector(".again");

const choice = ["rock", "paper", "scissors"];
//points[0] is player, points[1] is computer
let points = [0, 0];
let play = true;

const selection = function (e) {
  if (play) {
    const player = e.target.id;
    const computer = getComputerChoice();
    playRound(player, computer);
    playerScore.textContent = points[0];
    computerScore.textContent = points[1];
    if (points[0] === 3 || points[1] === 3) return winner();
  }
};
buttons.forEach((button) => button.addEventListener("click", selection));

const getComputerChoice = function () {
  const random = Math.floor(Math.random() * 3);
  return choice[random];
};

const playRound = function (player, computer) {
  if (player === computer) {
    createAnswer(player, computer);
  } else if (player === choice[0]) {
    if (computer === choice[1]) {
      createAnswer(player, computer);
      points[1]++;
    } else if (computer === choice[2]) {
      createAnswer(player, computer);
      points[0]++;
    }
  } else if (player === choice[1]) {
    if (computer === choice[0]) {
      createAnswer(player, computer);
      points[0]++;
    } else if (computer === choice[2]) {
      createAnswer(player, computer);
      points[1]++;
    }
  } else if (player === choice[2]) {
    if (computer === choice[0]) {
      createAnswer(player, computer);
      points[1]++;
    } else if (computer === choice[1]) {
      createAnswer(player, computer);
      points[0]++;
    }
  }
};

const createAnswer = function (player, computer) {
  answers.textContent = `${player} vs ${computer}`;
};

const lowerCase = (input) => {
  return input.toLowerCase();
};

const playerInput = (input) => {
  return input;
};

const game = function (round) {
  for (let i = round; i >= 0; i--) {
    let input = playerInput();
    let computer = getComputerChoice(choice);
    playRound(input, computer);
    if (points[0] === 3 || points[1] === 3) return winner();
  }
  return winner();
};

const winner = () => {
  play = false;
  if (points[0] > points[1]) {
    const p = document.createElement("p");
    p.textContent = `You win the game, score is ${points[0]} vs ${points[1]}`;
    answers.appendChild(p);
  } else {
    const p = document.createElement("p");
    p.textContent = `Computer wins the game, score is ${points[0]} vs ${points[1]}`;
    answers.appendChild(p);
  }
  // ?
  // : ;
};

const startAgain = function () {
  play = true;
  points = [0, 0];
  playerScore.textContent = points[0];
  computerScore.textContent = points[1];
  answers.textContent = " ";
};

again.addEventListener("click", startAgain);
