// Attempts: 2
// O(n)
// S(1)

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  var counter = 0;
  var orig = nums.length;
  for (var i=0; i<nums.length; i++) {
    if (nums[i] === val) {
      let x = i;
      while (x < nums.length) {
        nums[x] = nums[x+1];
        x++;
      }
      i--;
      counter++;
    }
  }
  return orig-counter;
};
