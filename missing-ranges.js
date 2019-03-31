var findMissingRanges = function(nums, lower, upper) {
  nums.unshift(lower-1);
  nums.push(upper+1);
  var ans = [];
  for (var i=0; i<nums.length-1; i++) {
    var diff = nums[i+1] - nums[i];
    if (diff === 2) ans.push((nums[i]+1).toString());
    if (diff > 2) {
      var interval = [nums[i]+1, nums[i+1]-1].join('->');
      ans.push(interval);
    }
  }
  return ans;
};
