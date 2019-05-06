/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  if (nums.length === 1) return nums;
  var ans = [];
  var dict = {};
  
  for (var i=0; i<nums.length; i++) {
    var clone = nums.slice(0);
    clone.splice(i, 1);
    ans.push(clone.reduce( (a,b) => a*b ));
  }
  return ans;
};
