/**
 * @param {number[][]} grid
 * @return {number}
 */
let matrix;
let dp = [];
function f(row, col) {
  if (row == matrix.length - 1 && col == matrix[0].length - 1) {
    return matrix[row][col];
  }
  if (dp[row][col] != -1) return dp[row][col];
  if (row == matrix.length - 1) {
    //If we reached at last row
    return (dp[row][col] = matrix[row][col] + f(row, col + 1));
  }
  if (col == matrix[0].length - 1) {
    // //If we reached at last col
    return (dp[row][col] = matrix[row][col] + f(row + 1, col));
  }
  return (dp[row][col] =
    matrix[row][col] + Math.min(f(row, col + 1), f(row + 1, col)));
}
var minPathSum = function (grid) {
  matrix = grid;
  for (let i = 0; i < 210; i++) {
    dp[i] = Array(210).fill(-1);
  }
  return f(0, 0);
};
