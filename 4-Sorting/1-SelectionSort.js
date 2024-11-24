function selectionSort(arr) {
  //i denotes the start of unsorted region
  for (let i = 0; i < arr.length - 1; i++) {
    let minEle = findMin(arr, i);
    if (minEle != i) {
      let temp = arr[i];
      arr[i] = arr[minEle];
      arr[minEle] = temp;
    }
  }
}

function findMin(arr, i) {
  let min = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }
  return min;
}

let arr = [5, 6, 3, 7, 1];
selectionSort(arr);
console.log(arr);
