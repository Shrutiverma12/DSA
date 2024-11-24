/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let start = 0;
  let end = n;
  let ans = 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let target = Math.floor((mid * (mid + 1)) / 2);
    if (target <= n) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
};
