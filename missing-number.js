/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n)
// S(1)
const missingNumber = (nums) => {
  for (let i=0; i<nums.length; i++) {
    let curr=nums[i];
    
    while (curr != null || curr != undefined) {
      let next = nums[curr];
      nums[curr] = null;
      curr = next;
    }    
  }
  for (let j=0; j<nums.length; j++) {
    if (nums[j] != null) return j;
  }
  
  return nums.length;
};
