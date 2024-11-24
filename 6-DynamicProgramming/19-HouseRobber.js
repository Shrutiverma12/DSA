/**
 * @param {number[]} nums
 * @return {number}
 */
let dp;
let n;
function f(i) {
  if (i >= n.length) return 0;
  if (dp[i] != -1) return dp[i];
  return (dp[i] = Math.max(f(i + 1), f(i + 2) + n[i]));
}
var rob = function (nums) {
  dp = Array(nums.length).fill(-1);
  n = nums;
  return f(0);
};
