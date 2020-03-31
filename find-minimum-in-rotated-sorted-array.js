/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n)
// O(logn)
const findMin = (nums) => {
  let l=0;
  let r=nums.length-1;
  
  while (l <= r) {
    let mid=Math.floor((l+r)/2);
    // min is on right side
    if (nums[l] < nums[mid] && nums[r] < nums[mid]) {
      l=mid+1;
    // min is on left side
    } else if (nums[l] > nums[mid] && nums[r] > nums[mid]) {
      r=mid;
    } else {
      break;
    }
  }
  if (nums[r] < nums[l]) l=r;
  return nums[l];
};
