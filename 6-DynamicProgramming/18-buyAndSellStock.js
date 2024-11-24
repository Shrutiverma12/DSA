/**
 * @param {number[]} prices
 * @return {number}
 */
let p;
let dp = [];
function f(i, buy, k) {
  if (p.length == i || k <= 0) return 0;
  if (dp[i][buy] != -1) return dp[i][buy];
  //buy
  if (buy == 1) {
    return (dp[i][buy] = Math.max(-p[i] + f(i + 1, 0, k), f(i + 1, 1, k)));
  }
  //sell
  else {
    return (dp[i][buy] = Math.max(p[i] + f(i + 1, 1, k - 1), f(i + 1, 0, k)));
  }
}
var maxProfit = function (prices) {
  p = prices;
  for (let i = 0; i < prices.length; i++) {
    dp[i] = Array(2).fill(-1);
  }
  return f(0, 1, 1);
};
