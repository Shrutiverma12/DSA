/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let n = nums.length;
  let st = 0;
  let end = n - 1;
  while (st <= end) {
    let mid = Math.floor((st + end) / 2);
    if (
      (mid == 0 || nums[mid] > nums[mid - 1]) &&
      (mid == n - 1 || nums[mid] > nums[mid + 1])
    ) {
      return mid;
    } else if (nums[mid] < nums[mid + 1]) {
      st = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};
