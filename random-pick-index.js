/**
 * @param {number[]} nums
 */
class Solution {
  constructor(nums) {
    this.nums = nums;
  }
  
  /** 
   * @param {number} target
   * @return {number}
   */  
  pick = (target) => {
    let indexes = [];
    for (let i=0; i<this.nums.length; i++) {
      if (target === this.nums[i]) indexes.push(i);
    }
    
    let randomIdx = Math.floor(Math.random()*Math.floor(indexes.length));
    return indexes[randomIdx];
  }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
