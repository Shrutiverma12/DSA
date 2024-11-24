var containsDuplicate = function (nums) {
  let mp = {};
  for (let i = 0; i < nums.length; i++) {
    if (mp[nums[i]] == undefined) {
      mp[nums[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
};
