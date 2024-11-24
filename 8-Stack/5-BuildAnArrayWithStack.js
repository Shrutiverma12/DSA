/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let arr = [];
  let cur = 0;
  for (let i = 1; i <= n; i++) {
    if (cur >= target.length) break;
    if (target[cur] == i) {
      arr.push("Push");
      cur++;
    } else {
      arr.push("Push");
      arr.push("Pop");
    }
  }
  return arr;
};
