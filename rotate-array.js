/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Optimal
// O(n)
// S(1)

// intuition is to reverse the entire array
// and then reverse sections left and right of rotate index
const rotate = (nums, k) => {
  if (nums.length === 1) return nums;
  if (k > nums.length) k = k-nums.length;

  function reverse(s, e) {
    while (s<e) {
      let tmp = nums[e];
      nums[e] = nums[s];
      nums[s] = tmp;
      s++;
      e--;
    }
  }

  reverse(0, nums.length-1);
  reverse(0, k-1);
  reverse(k, nums.length-1);
};























// O(n*k)
// S(1)
// var rotate = function(nums, k) {
//   if (nums.length === 0 || nums.length === 1) return nums;
//   for (var j=0; j<k; j++) {
//     var tmpVal;
//     var nextVal = nums[0];
//     for (var i=0; i<nums.length; i++) {
//       var idx = i+1;
//       if (idx >= nums.length) idx -= nums.length;
//       tmpVal = nums[idx];
//       nums[idx] = nextVal;
//       nextVal = tmpVal;
//     }
//   }
//   return nums;
// };
