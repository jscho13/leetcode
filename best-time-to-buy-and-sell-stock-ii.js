/**
 * @param {number[]} prices
 * @return {number}
 */
// O(n)
// S(1)
const maxProfit = (nums) => {
  if (nums.length===0) return 0;

  let start=nums[0];
  let sum=0;
  for (let i=1; i<nums.length; i++) {
    if (nums[i]>start) sum += nums[i]-start;
    start = nums[i];
  }
  
  return sum;
};
