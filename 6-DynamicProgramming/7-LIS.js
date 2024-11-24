/**
 * @param {number[]} nums
 * @return {number}
 */
let arr = [];
let dp = [];
function f(i) {
  if (i == 0) return 1;
  if (dp[i] != -1) return dp[i];
  let res = 1;
  for (let j = 0; j <= i - 1; j++) {
    if (arr[j] < arr[i]) {
      res = Math.max(res, 1 + f(j));
    }
  }
  return (dp[i] = res);
}

function f_bu() {
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) dp[i] = 1;
    else {
      let res = 1;
      for (let j = 0; j <= i - 1; j++) {
        if (arr[j] < arr[i]) {
          res = Math.max(res, 1 + dp[j]);
        }
      }
      dp[i] = res;
    }
  }
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = Math.max(ans, dp[i]);
  }
  return ans;
}

var lengthOfLIS = function (nums) {
  let ans = 0;
  dp = Array(10000).fill(-1);
  arr = nums;
  for (let i = 0; i < nums.length; i++) {
    ans = Math.max(ans, f(i));
  }
  return ans;
  //for bottom up just call f_bu
};
