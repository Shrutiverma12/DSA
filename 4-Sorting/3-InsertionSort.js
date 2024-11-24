function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > element) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = element;
  }
}
let arr = [8, 6, 7, 9, 2, 1];
insertionSort(arr);
console.log(arr);
