/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let dp = [];
let a, b;
function f(i, j) {
  if (i == a || j == b) {
    return 0;
  }
  if (i == a - 1 && j == b - 1) {
    return 1;
  }
  if (dp[i][j] != -1) return dp[i][j];
  let down = f(i + 1, j);
  let right = f(i, j + 1);
  return (dp[i][j] = down + right);
}
var uniquePaths = function (m, n) {
  a = m;
  b = n;
  for (let i = 0; i < m * n; i++) {
    dp[i] = Array(100).fill(-1);
  }
  return f(0, 0);
};
