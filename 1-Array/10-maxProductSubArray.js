/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    if (num < 0) {
      [max, min] = [min, max];
    }
    max = Math.max(num, num * max);
    min = Math.min(num, num * min);
    result = Math.max(result, max);
  }
  return result;
};
