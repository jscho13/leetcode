/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// O(n*k)
// S(target)
const combinationSum4 = (nums, target) => {
  let ary = new Array(target+1).fill(0);
  ary[0]=1;
  
  for (let i=0; i<=target; i++) {
    for (let n=0; n<nums.length; n++) {
      if (nums[n] <= i) {
        ary[i] = ary[i]+ary[i-nums[n]];
      }
    }
  }
  
  return ary[target];
};
