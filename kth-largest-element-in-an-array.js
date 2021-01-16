/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 
// This is easy with max heap.
// Supposedly O(n) and O(n^2) worst case
const findKthLargest = (nums, k) => {
  const quickSort = (l, r) => {
    if (l >= r) return;
    
    let searchL = l;
    let searchR = r;
    let pivot = r;

    while (searchL < searchR) {
      while (nums[searchL]<nums[pivot])  searchL++;
      while (nums[searchR]>=nums[pivot]) searchR--;
      if (searchL < searchR) {
        [nums[searchL], nums[searchR]] = [nums[searchR], nums[searchL]];
      }
    }
    
    [nums[pivot], nums[searchL]] = [nums[searchL], nums[pivot]];
    quickSort(l, searchL-1);
    quickSort(searchL+1, r);
  }
  
  quickSort(0, nums.length-1);
  return nums[nums.length-k];
};
