/**
 * @param {number[]} nums
 * @return {boolean}
 */
// O(n^2)
// S(n)
const canJump = (nums) => {
  let ary = new Array(nums.length);
  ary[0]=true;

  for (let i=0; i<nums.length-1; i++) {
    if (ary[i] === true) {
      let step=1;
      while (step<=nums[i]) {
        ary[i+step] = true;
        step++;
      }
    }
  }
  
  return !!ary[ary.length-1];
};
