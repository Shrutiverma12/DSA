/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let st = 0;
  let end = x;
  let ans = -1;
  while (st <= end) {
    let mid = Math.floor((st + end) / 2);
    let val = mid * mid;
    if (val == x) {
      return mid;
    } else if (val < x) {
      ans = mid;
      st = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
};
