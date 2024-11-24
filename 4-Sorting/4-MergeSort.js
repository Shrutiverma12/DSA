function mergeSortHelper(arr, st, end) {
  if (st == end) {
    let result = [];
    result[0] = arr[st];
    return result;
  }

  let mid = Math.floor((st + end) / 2);
  let left = mergeSortHelper(arr, st, mid);
  let right = mergeSortHelper(arr, mid + 1, end);
  return sort(left, right);
}

function mergeSort(arr) {
  return mergeSortHelper(arr, 0, arr.length - 1);
}

function sort(left, rigth) {
  let i = 0,
    j = 0,
    k = 0;

  const temp = [];
  while (i < left.length && j < rigth.length) {
    if (left[i] <= rigth[j]) {
      temp[k] = left[i];
      i++;
      k++;
    } else {
      temp[k] = rigth[j];
      j++;
      k++;
    }
  }
  while (i < left.length) {
    temp[k] = left[i];
    k++;
    i++;
  }
  while (j < rigth.length) {
    temp[k] = rigth[j];
    k++;
    j++;
  }
  return temp;
}

console.log(mergeSort([4, 6, 5, 1, 2]));
