function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) i++;
    while (arr[j] > pivot && j >= low + 1) j--;
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;
  return j;
}

function qs(arr, low, high) {
  if (low < high) {
    let pIndex = partition(arr, low, high);
    qs(arr, low, pIndex - 1);
    qs(arr, pIndex + 1, high);
  }
}

function QuickSort(arr) {
  qs(arr, 0, arr.length - 1);
  return arr;
}

console.log(QuickSort([4, 3, 6, 11, 9, 2]));
