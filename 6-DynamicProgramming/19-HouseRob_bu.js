function f_bu() {
  dp[0] = n[0];
  if (n[0] > n[1]) {
    dp[1] = n[0];
  } else {
    dp[1] = n[1];
  }
  for (let i = 2; i < n.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + n[i]);
  }
  return dp[n.length - 1];
}
var rob = function (nums) {
  dp = Array(nums.length).fill(-1);
  n = nums;
  return f_bu();
};
