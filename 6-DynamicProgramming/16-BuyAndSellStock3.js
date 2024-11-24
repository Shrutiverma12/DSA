/**
 * @param {number[]} prices
 * @return {number}
 */
let p;
let dp = [[[]]];
function f(i, k, on) {
  if (p.length == i) return 0;
  if (dp[i][k][on] != -1) return dp[i][k][on];
  let ans = Number.MIN_SAFE_INTEGER;
  //ignore
  ans = Math.max(ans, f(i + 1, k, on));
  //buy
  if (k > 0 && on == 0) {
    ans = Math.max(ans, -p[i] + f(i + 1, k, 1));
  }
  //sell
  if (on == 1) {
    ans = Math.max(ans, p[i] + f(i + 1, k - 1, 0));
  }
  return (dp[i][k][on] = ans);
}
var maxProfit = function (prices) {
  for (let i = 0; i < prices.length; i++) {
    dp[i] = new Array(105);
  }
  for (let i = 0; i < prices.length; i++) {
    for (let j = 0; j < 3; j++) {
      dp[i][j] = new Array(2).fill(-1);
    }
  }
  p = prices;
  return f(0, 2, 0);
};
