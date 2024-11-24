/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

let dp;
let c;
function f(amount) {
  if (amount <= 0) return 0;
  if (dp[amount] != -1) return dp[amount];
  let n = c.length;
  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (amount >= c[i]) {
      ans = Math.min(ans, f(amount - c[i]));
    }
  }
  if (ans == Number.MAX_SAFE_INTEGER) {
    return (dp[amount] = Number.MAX_SAFE_INTEGER);
  }
  return (dp[amount] = 1 + ans);
}

function f_bu(val) {
  dp = Array(10005);
  dp[0] = 0;
  for (let amount = 1; amount <= val; amount++) {
    let n = c.length;
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
      if (amount >= c[i]) {
        ans = Math.min(ans, dp[amount - c[i]]);
      }
    }
    if (ans == Number.MAX_SAFE_INTEGER) {
      dp[amount] = Number.MAX_SAFE_INTEGER;
    } else {
      dp[amount] = 1 + ans;
    }
  }
  return dp[val];
}

var coinChange = function (coins, amount) {
  c = coins;
  //dp = Array(10005).fill(-1)
  let ans = f_bu(amount);
  return ans == Number.MAX_SAFE_INTEGER ? -1 : ans;
};

//TC -> O(n) = O(n*amount)
//SC -> O(amount)
