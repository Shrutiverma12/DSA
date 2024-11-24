/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 2) return true;
  let start = 1;
  let end = Math.floor(num / 2);
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let val = mid * mid;
    if (val == num) {
      return true;
    } else if (val > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
};
