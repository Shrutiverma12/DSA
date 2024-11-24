/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let ans;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid + 1]) {
      ans = mid;
      right = mid - 1;
    } else left = mid + 1;
  }
  return ans;
};
