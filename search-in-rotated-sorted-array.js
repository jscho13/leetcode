/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
// Attempt 3:
// O(n)
// S(1)
const search = (nums, target) => {
  let [l,r]=[0,nums.length-1];
  while (l<=r) {
    let mid = Math.floor((l+r)/2);
    if (target === nums[mid]) return mid;

    // if mid < end the pivot is either left or mid
    if (nums[mid]<nums[r]) {
      if (target>nums[mid] && target<=nums[r]) {
        l=mid+1;
      } else {
        r=mid-1;
      }
    } else {
    // if mid > end the pivot is on the right
      if (target>=nums[l] && target<nums[mid]) {
        r=mid-1;
      } else {
        l=mid+1;
      }
    }
  }
      
  return -1;
};
