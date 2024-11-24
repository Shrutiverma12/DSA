/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  function lowerBound(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let result = arr.length;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] < x) {
        low = mid + 1;
      } else {
        result = mid;
        high = mid - 1;
      }
    }
    return result;
  }
  return lowerBound(nums, target);
};
