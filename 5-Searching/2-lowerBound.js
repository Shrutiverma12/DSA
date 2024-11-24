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
let arr = [2, 2, 2, 4, 4, 5, 9, 10, 11, 13, 15];
console.log(lowerBound(arr, 4));
