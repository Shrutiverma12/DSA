var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let target = -nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum < target) left++;
      else if (sum > target) right--;
      else {
        let tri = [nums[i], nums[left], nums[right]];
        res.push(tri);
        while (left < right && nums[left] == tri[1]) left++;
        while (left < right && nums[right] == tri[2]) right--;
      }
    }
  }
  return res;
};
