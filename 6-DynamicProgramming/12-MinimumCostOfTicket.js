/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
let c;
let s;
let dp;
let lastday;
function f(d) {
  if (d > lastday) return 0;
  if (!s.has(d)) return f(d + 1);
  if (dp[d] != -1) return dp[d];
  let ans = Math.min(c[0] + f(d + 1), c[1] + f(d + 7), c[2] + f(d + 30));
  return (dp[d] = ans);
}
var mincostTickets = function (days, costs) {
  s = new Set(days);
  c = costs;
  lastday = days[days.length - 1];
  dp = Array(400).fill(-1);
  return f(1);
};
