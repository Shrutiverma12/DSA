/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid - 1] !== arr[mid] && arr[mid] !== arr[mid + 1]) {
      return arr[mid];
    } else if (
      (mid % 2 == 1 && arr[mid - 1] == arr[mid]) || //if mid is on odd position and left is equal to mid or mid is on even position and right one is eqal then we have to search in right region
      (mid % 2 == 0 && arr[mid] == arr[mid + 1])
    ) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
