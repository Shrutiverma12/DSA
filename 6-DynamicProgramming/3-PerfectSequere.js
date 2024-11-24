/**
 * @param {number} n
 * @return {number}
 */
let c;
let dp;
function f(amount) {
  if (amount <= 0) return 0;
  if (dp[amount] != -1) return dp[amount];
  let ans = Number.MAX_SAFE_INTEGER;
  let n = c.length;
  for (let i = 0; i < n; i++) {
    if (amount >= c[i]) {
      ans = Math.min(ans, f(amount - c[i]));
    } else {
      break;
    }
  }
  return (dp[amount] = 1 + ans);
}
var numSquares = function (n) {
  c = Array(10000);
  j = 0;
  dp = Array(100000).fill(-1);
  for (let i = 1; i * i < 100000; i++) {
    c[j] = i * i;
    j++;
  }
  return f(n);
};
