"use stricts";

const choice = ["rock", "paper", "scissors"];
let round = 5;
//points[0] is player, points[1] is computer
let points = [0, 0];

const getComputerChoice = function () {
  const random = Math.floor(Math.random() * 3);
  return choice[random];
};

const playRound = function (player, computer) {
  if (player === computer) {
    round++;
    return "It is a draw";
  } else if (player === choice[0]) {
    if (computer === choice[1]) {
      points[1]++;
      return `Computer wins ${computer} beats ${player}`;
    } else if (computer === choice[2]) {
      points[0]++;
      return `You win ${player} beats ${computer}`;
    }
  } else if (player === choice[1]) {
    if (computer === choice[0]) {
      points[0]++;
      return `You win ${player} beats ${computer}`;
    } else if (computer === choice[2]) {
      points[1]++;
      return `Computer wins ${computer} beats ${player}`;
    }
  } else if (player === choice[2]) {
    if (computer === choice[0]) {
      points[1]++;
      return `Computer wins ${computer} beats ${player}`;
    } else if (computer === choice[1]) {
      points[0]++;
      return `You win ${player} beats ${computer}`;
    }
  }
};

const lowerCase = (input) => {
  return input.toLowerCase();
};

// const playerInput = () => {
//   const input = lowerCase(prompt("Choose rock, paper or scissors!"));
//   if (!choice.includes(input)) {
//     alert("Try again!");
//     return playerInput();
//   }
//   return input;
// };

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
  return points[0] > points[1]
    ? `You win the game, score is ${points[0]} vs ${points[1]}`
    : `Computer wins the game, score is ${points[0]} vs ${points[1]}`;
};

console.log(game(round));
