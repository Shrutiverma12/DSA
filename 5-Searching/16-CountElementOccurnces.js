module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  findCount: function (A, B) {
    let st = 0;
    let end = A.length - 1;
    let i = -1;
    let j = -1;
    while (st <= end) {
      let mid = Math.floor(st + (end - st) / 2);
      if (A[mid] == B) {
        i = mid;
        while (A[mid - 1] == B) {
          i = mid - 1;
          mid--;
        }
        j = mid;
        while (A[mid + 1] == B) {
          j = mid + 1;
          mid++;
        }
        return j - i + 1;
      } else if (B < A[mid]) {
        end = mid - 1;
      } else if (B > A[mid]) {
        st = mid + 1;
      }
    }
    return 0;
  },
};
