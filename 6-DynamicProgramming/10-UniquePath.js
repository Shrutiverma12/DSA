/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
let dp = [];
let m, n, ob;
function f(row, col) {
  if (row == m || col == n || ob[row][col] == 1) return 0;
  if (row == m - 1 && col == n - 1) {
    if (ob[row][col] == 1) return 0;
    return 1;
  }
  if (dp[row][col] != -1) return dp[row][col];
  let down = f(row + 1, col);
  let right = f(row, col + 1);
  return (dp[row][col] = down + right);
}

var uniquePathsWithObstacles = function (obstacleGrid) {
  ob = obstacleGrid;
  m = obstacleGrid.length;
  n = obstacleGrid[0].length;
  for (let i = 0; i < 105; i++) {
    dp[i] = Array(100).fill(-1);
  }
  return f(0, 0);
};
