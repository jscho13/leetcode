/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  var nums = nums.sort(function(a,b) { return a-b; });
  var max = nums[nums.length-1];
  var ans;
  for (var i=0; i<nums.length; i++) {
    if (ans == nums[i]) {
      break
    } else {
      ans = nums[i]
    }
  }
  
  return ans;
};
