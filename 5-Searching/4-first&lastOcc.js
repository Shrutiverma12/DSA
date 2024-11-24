/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
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
  function upperBound(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let result = arr.length;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] <= x) {
        low = mid + 1;
      } else {
        result = mid;
        high = mid - 1;
      }
    }
    return result;
  }
  let lb = lowerBound(nums, target);
  let res = [];
  if (lb == nums.length || nums[lb] != target) {
    res[0] = -1;
    res[1] = -1;
  } else {
    let ub = upperBound(nums, target);
    res[0] = lb;
    res[1] = ub - 1;
  }
  return res;
};
