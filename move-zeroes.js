/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// O(n)
// S(1)
const moveZeroes = (nums) => {
  let l=0;
  let r=0;
  while (l<nums.length-1) {
    if (nums[l] === 0) {
      while (nums[r] === 0 && r<nums.length-1) r++;
      let temp = nums[r];
      nums[r] = nums[l];
      nums[l] = temp;
    }
    l++;
    r=l;
  }
  
  return nums;
};
