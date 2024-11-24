/**
 * @param {number} n
 * @return {number}
 */
let dp = [];
function f(stairs) {
  if (stairs <= 1) return 1;
  if (dp[stairs] != -1) return dp[stairs];
  return (dp[stairs] = f(stairs - 1) + f(stairs - 2));
}
var climbStairs = function (n) {
  dp = Array(100).fill(-1);
  return f(n);
};
