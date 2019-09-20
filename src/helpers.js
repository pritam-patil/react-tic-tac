export const checkWinner = (board = []) => {
  const WINNING_POS = [
    [0, 1, 2],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ];

  for (let index = 0; index < WINNING_POS.length; index++) {
    const [a, b, c] = WINNING_POS[index];

    if (!!board[a] && board[a] === board[b] && board[a] === board[c]) {
      return [board[a], [a, b, c]];
    }
  }

  return [null, []];
};
