var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j != i + 1 && nums[j] == nums[j - 1]) continue;
      let k = j + 1;
      let l = nums.length - 1;
      while (k < l) {
        let tar = nums[i] + nums[j] + nums[k] + nums[l];
        if (tar == target) {
          res.push([nums[i], nums[j], nums[k], nums[l]]);
          k++;
          l--;
          while (k < l && nums[k] == nums[k - 1]) k++;
          while (k < l && nums[l] == nums[l + 1]) l--;
        } else if (tar < target) {
          k++;
        } else {
          l--;
        }
      }
    }
  }
  return res;
};
console.log(fourSum([1, 0, -1, 0, -2, 2], 1));
