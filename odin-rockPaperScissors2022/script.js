const choice_list = ["rock", "paper", "scissors"];

function result(player1, player2) {
  const rule = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0],
  ];
  return rule[player1][player2];
}

function createChild(parentQuery) {
  const parent = document.querySelector(parentQuery);
}
