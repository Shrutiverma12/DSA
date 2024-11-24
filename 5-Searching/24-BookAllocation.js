module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer

  books: function (A, B) {
    function NoPages(A, page) {
      let std = 1;
      let pages = 0;
      for (let i = 0; i < A.length; i++) {
        if (pages + A[i] <= page) {
          pages += A[i];
        } else {
          std += 1;
          pages = A[i];
        }
      }
      return std;
    }
    let low = Math.min(...A);
    let high = A.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let noOfPages = NoPages(A, mid);
      if (noOfPages > B) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return low;
  },
};
