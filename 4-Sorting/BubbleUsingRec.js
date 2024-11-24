function recBub(arr, i) {
  if (i == arr.length - 1) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  recBub(arr, i + 1);
}

let arr = [6, 3, 5, 1, 4, 2];
recBub(arr, 0);
console.log("Sorted Array is", arr);
