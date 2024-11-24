/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  if (nums.length == 1) return nums[0];
  if (nums[left] < nums[right]) return nums[left];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid + 1] < nums[mid]) {
      return nums[mid + 1];
    }
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    } else {
      if (nums[mid] >= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
};

/**
 * /**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function(nums) {
//     let left = 0 ;
//     let right = nums.length - 1;
//     while(left<=right){
//         let mid = Math.floor((left+right)/2);
//         if(nums[mid] < nums[right]) right = mid;
//         else left = mid + 1;
//      }
//     return nums[left - 1]
// };
