
var maxSubArray = function(nums) {
  var curr = nums[0];
  var max = nums[0];
  for (var i=1; i<nums.length; i++) {
    curr = Math.max(curr+nums[i], nums[i]);
    max = Math.max(max, curr);
  }
  return max;
}

