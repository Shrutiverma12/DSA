let dp = [];
let s1, s2, m, n;
function f(i, j) {
  if (i == -1) return j + 1;
  if (j == -1) return i + 1;
  if (s1[i] == s2[j]) return f(i - 1, j - 1);
  if (dp[i][j] != -1) return dp[i][j];
  else {
    let a1 = 1 + f(i, j - 1); // insert
    let a2 = 1 + f(i - 1, j); // delete
    let a3 = 1 + f(i - 1, j - 1); // replace
    return (dp[i][j] = Math.min(a1, a2, a3));
  }
}
var minDistance = function (word1, word2) {
  s1 = word1;
  s2 = word2;
  m = word1.length;
  n = word2.length;

  for (let i = 0; i < 505; i++) {
    dp[i] = Array(505).fill(-1);
  }
  return f(m, n);
  //return f_bu(m+1,n+1)
};
