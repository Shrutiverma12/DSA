/**
 * @param {number} n
 * @return {number}
 */
let dp = [];
function f(n) {
  if (n == 0 || n == 1) return n;
  if (dp[n] != -1) dp[n];
  return fib(n - 1) + fib(n - 2);
}
function f_bu(n) {
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
var fib = function (n) {
  //dp = Array.fill(-1)
  //return f(n);
  return f_bu(n);
};
