/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var minEatingSpeed = function (piles, h) {
  function caneat(piles, h, mid) {
    let th = 0;
    for (let i = 0; i < piles.length; i++) {
      th += Math.ceil(piles[i] / mid);
    }
    return th <= h;
  }
  let lo = 1;
  let hi = Math.max(...piles); //O(n)
  let ans = 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (caneat(piles, h, mid)) {
      ans = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return ans;
};
