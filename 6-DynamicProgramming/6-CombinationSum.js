/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let dp;
let arr;
function f(t) {
  if (t == 0) return 1;
  let n = arr.length;
  let res = 0;
  if (dp[t] != -1) return dp[t];
  for (let k = 0; k < n; k++) {
    if (t - arr[k] >= 0) {
      res += f(t - arr[k]);
    }
  }
  return (dp[t] = res);
}
function f_bu(t) {
  for (let i = 0; i <= t; i++) {
    if (i == 0) dp[i] = 1;
    else {
      let n = arr.length;
      let res = 0;
      for (let k = 0; k < n; k++) {
        if (i - arr[k] >= 0) {
          res += dp[i - arr[k]];
        }
      }
      dp[i] = res;
    }
  }
  return dp[t];
}
var combinationSum4 = function (nums, target) {
  arr = nums;
  dp = Array(target + 1).fill(-1);
  return f(target);
};
