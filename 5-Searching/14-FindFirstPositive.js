/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let n = nums.length;
  for (let i = 0; i <= n; i++) {
    let element = nums[i];
    let chair = element - 1;
    if (element <= n && nums[i] > 0) {
      if (nums[chair] !== element) {
        //Swap the chair with i
        let temp = nums[chair];
        nums[chair] = nums[i];
        nums[i] = temp;
        i--;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (i + 1 !== nums[i]) return i + 1;
  }
  return n + 1;
};
