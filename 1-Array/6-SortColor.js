/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  let st = 0;
  let mid = 0;
  let end = nums.length - 1;
  while (mid <= end) {
    switch (nums[mid]) {
      case 0:
        swap(nums, st, mid);
        mid++;
        st++;
        break;

      case 1:
        mid++;
        break;

      case 2:
        swap(nums, mid, end);
        end--;
        break;
    }
  }
};
