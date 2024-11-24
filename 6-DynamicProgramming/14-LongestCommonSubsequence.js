/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
let dp = [];
function f(s1, s2, i, j) {
  if (i == s1.length || j == s2.length) return 0;
  if (dp[i][j] != -1) return dp[i][j];
  if (s1[i] == s2[j]) {
    return (dp[i][j] = 1 + f(s1, s2, i + 1, j + 1));
  } else {
    return (dp[i][j] = Math.max(f(s1, s2, i + 1, j), f(s1, s2, i, j + 1)));
  }
}
var longestCommonSubsequence = function (text1, text2) {
  for (let i = 0; i < text1.length; i++) {
    dp[i] = Array(text2.length).fill(-1);
  }
  return f(text1, text2, 0, 0);
};
