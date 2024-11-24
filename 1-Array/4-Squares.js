var sortedSquares = function (nums) {
  let sqr = [];
  for (let i = 0; i < nums.length; i++) {
    sqr.push(nums[i] ** 2);
  }
  return sqr.sort((a, b) => a - b);
};

var sortedSquares = function (nums) {
  let n = nums.length;
  let left = 0;
  let rigth = n - 1;
  let res = Array(n);
  for (let i = n - 1; i >= 0; i--) {
    if (nums[left] ** 2 < nums[rigth] ** 2) {
      res[i] = nums[rigth] ** 2;
      rigth--;
    } else {
      res[i] = nums[left] ** 2;
      left++;
    }
  }
  return res;
};
