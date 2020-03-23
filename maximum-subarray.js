/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = (nums) => {
  let sum=0;
  let ans=Number.NEGATIVE_INFINITY;
  for (let i=0; i<nums.length; i++) {
    sum += nums[i];
    if (nums[i] > sum) sum = nums[i];
    ans = Math.max(sum, ans);
  }
  return ans;
};
