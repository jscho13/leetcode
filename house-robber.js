/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n)
// S(n)
const rob = function(nums) {
  let ary = new Array(nums.length);
  let max = 0;
  
  for (let i=0; i<nums.length; i++) {
    let num1 = nums[i] + (ary[i-2]||0);
    let num2 = nums[i] + (ary[i-3]||0);
    ary[i] = Math.max(num1, num2);
    max = Math.max(max, ary[i]);
  }
  
  return max;
};
