
var rotate = function(nums, k) {
  if (nums.length === 0 || nums.length === 1) return nums;
  for (var j=0; j<k; j++) {
    var tmpVal;
    var nextVal = nums[0];
    for (var i=0; i<nums.length; i++) {
      var idx = i+1;
      if (idx >= nums.length) idx -= nums.length;
      tmpVal = nums[idx];
      nums[idx] = nextVal;
      nextVal = tmpVal;
    }
  }
  return nums;
};
