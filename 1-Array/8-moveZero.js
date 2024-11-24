/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let j = i + 1;
  while (j < nums.length) {
    if (nums[i] !== 0) {
      i++;
      j++;
    } else {
      if (nums[j] !== 0) {
        nums[i] = nums[j];
        nums[j] = 0;
        i++;
      }
      j++;
    }
  }
};

var moveZeroes = function (nums) {
  let lastZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[lastZero]] = [nums[lastZero], nums[i]];
      lastZero++;
    }
  }
};
