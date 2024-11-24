/**
 * @param {number[]} prices
 * @return {number}
 */
let p;
let dp = [];
function f(i, buy) {
  if (p.length == i) return 0;
  if (dp[i][buy] != -1) return dp[i][buy];
  let ans = Number.MIN_SAFE_INTEGER;
  //buy
  if (buy == 1) {
    ans = Math.max(-p[i] + f(i + 1, 0), f(i + 1, 1));
  }
  //sell
  else {
    ans = Math.max(p[i] + f(i + 1, 1), f(i + 1, 0));
  }
  return (dp[i][buy] = ans);
}
var maxProfit = function (prices) {
  p = prices;
  for (let i = 0; i < prices.length; i++) {
    dp[i] = Array(2).fill(-1);
  }
  return f(0, 1);
};
