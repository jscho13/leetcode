/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n^2)
// S(1)
const maxProduct = (nums) => {
  if (nums.length===0) return 0;
  
  let max=Math.max(...nums);
  for (let i=0; i<nums.length-1; i++) {
    let num = nums[i];
    for (let j=i+1; j<nums.length; j++) {
      num *= nums[j];
      max = Math.max(num, max);
    }
  }

  return max;
};
