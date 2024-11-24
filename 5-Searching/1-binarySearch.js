function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == x) {
      return mid;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

let arr = [2, 4, 5, 9, 10, 11, 13, 15];
console.log(binarySearch(arr, 5));
