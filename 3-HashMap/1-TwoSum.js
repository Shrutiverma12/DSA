var twoSum = function (nums, target) {
  let mp = {};
  for (let i = 0; i < nums.length; i++) {
    mp[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    if (mp[target - nums[i]] != undefined && mp[target - nums[i]] != i) {
      return [mp[target - nums[i]], i];
    }
  }
};
