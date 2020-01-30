/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = (nums) => {
  let set = {0: 0}
  let max = 0;
  for (let i=0; i<nums.length; i++) {
    let num = nums[i];
    set[num] = (set[num]) ? set[num]+1 : 1;
    if (set[num] > set[max]) max = num;
  }

  return max;
};
