/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let st = 0;
  let m = matrix[0].length;
  let end = matrix.length * m - 1;
  while (st <= end) {
    let mid = parseInt((st + end) / 2);
    if (target == matrix[Math.floor(mid / m)][mid % m]) {
      return true;
    } else if (target < matrix[Math.floor(mid / m)][mid % m]) {
      end = mid - 1;
    } else {
      st = mid + 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    5
  )
);
