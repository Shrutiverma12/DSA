var twoSum = function (num, target) {
  let i = 0;
  let j = num.length - 1;
  while (i < j) {
    if (num[i] + num[j] == target) {
      return [i + 1, j + 1];
    } else if (num[i] + num[j] > target) {
      j--;
    } else {
      i++;
    }
  }
};
