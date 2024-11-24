/**
 * @param {number[][]} triangle
 * @return {number}
 */

//memoization (Top down)
let matrix;
let dp = [];
function f(row, col) {
  if (row == matrix.length - 1) {
    return matrix[row][col];
  }
  if (dp[row][col] != -1) return dp[row][col];
  return (dp[row][col] =
    matrix[row][col] + Math.min(f(row + 1, col), f(row + 1, col + 1)));
}

//Tabulation (Bottom up)

function f_bu() {
  for (let i = 0; i < 205; i++) {
    dp[i] = Array(205);
  }
  //base case
  let n = matrix.length;
  for (let i = 0; i < matrix[n - 1].length; i++) {
    dp[n - 1][i] = matrix[n - 1][i];
  }

  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col < matrix[row].length; col++) {
      dp[row][col] =
        matrix[row][col] + Math.min(dp[row + 1][col], dp[row + 1][col + 1]);
    }
  }
  return dp[0][0];
}
var minimumTotal = function (triangle) {
  matrix = triangle;
  for (let i = 0; i < 205; i++) {
    dp[i] = Array(205).fill(-1);
  }
  return f(0, 0);
  //for bottom up just call the function
};
