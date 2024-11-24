function findCount(A, B) {
  let start = 0;
  let end = A.length - 1;
  let minIndex = -1;
  let maxIndex = -1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (A[mid] == B) {
      minIndex = mid;
      while (A[mid - 1] == B) {
        minIndex = mid - 1;
        mid--;
      }
      maxIndex = mid;
      while (A[mid + 1] == B) {
        maxIndex = mid + 1;
        mid++;
      }
      return maxIndex - minIndex + 1;
    } else if (B < A[mid]) {
      end = mid - 1;
    } else if (B > A[mid]) {
      start = mid + 1;
    }
  }

  return 0;
}

console.log(findCount([1, 2, 3, 3, 3, 3, 4, 5], 3));
