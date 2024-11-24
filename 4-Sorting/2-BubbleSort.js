function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (isSwapped == false) return;
  }
}

// 5,6,7,3
let arr = [5, 6, 3, 7, 1];
bubbleSort(arr);
console.log(arr);
