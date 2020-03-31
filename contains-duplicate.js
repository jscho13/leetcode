/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  let hash = {};
  for (let i=0; i<nums.length; i++) {
    if (hash[nums[i]]) return true;
    hash[nums[i]] = true;
  }
  
  return false;
};
