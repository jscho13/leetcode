/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (nums.length === 0) return 1;
  var max = Math.max(...nums);
  if (max < 0) return 1;
  
  var dict = {};
  for (var i=0; i < nums.length; i++) {
    var num = nums[i];
    if (num > 0) {
      dict[num] = true;  
    }
  }
  
  for (var i=1; i<max; i++) {
    if (dict[i] !== true) {
      return i;
    }
  }
  
  return max+1;
};
