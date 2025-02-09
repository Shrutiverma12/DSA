/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

function dfs(board, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[0].length ||
    board[i][j] == "X" ||
    board[i][j] == "W"
  ) {
    return;
  }
  board[i][j] = "W";
  dfs(board, i + 1, j);
  dfs(board, i - 1, j);
  dfs(board, i, j + 1);
  dfs(board, i, j - 1);
  return;
}

var solve = function (board) {
  let m = board.length;
  let n = board[0].length;
  let qu = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
        if (board[i][j] == "O") {
          dfs(board, i, j);
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == "W") {
        board[i][j] = "O";
      } else board[i][j] = "X";
    }
  }
  return board;
};
