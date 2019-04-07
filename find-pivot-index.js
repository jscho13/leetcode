// Time-complexity: O(n)
// Space-complexity: O(n)

// Dirty
// var pivotIndex = function(nums) {
//   if (nums.length === 0) return -1;
//   if (nums.length === 1) return nums[0];
//   if (nums.length === 2) return -1;
  
//   var left = 0;
//   var right = 0;
//   for (var i=1; i<nums.length; i++) {
//     right = nums[i]+right;
//   }
//   if (left === right) return 0;
  
//   var tmp = nums[0];
//   for (var j=1; j<nums.length; j++) {
//     left = left + tmp;
//     right = right - nums[j];
//     tmp = nums[j];
//     if (left === right) return j;
//   }

//   return -1;
// };

// Clean
var pivotIndex = function(nums) {
  if (nums.length === 0) return -1;
  var left, right;
  for (var i=0; i<nums.length; i++) {
    left = nums.slice(0, i).reduce(function(a,b) { return a+b; }, 0);
    right = nums.slice(i+1, nums.length).reduce(function(a,b) { return a+b; }, 0);
    if (left === right) return i;
  }

  return -1;
}
