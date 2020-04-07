/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// O(n * n!)
const permute = (nums) => {
  let ans = [];
  let res = [];
  let len = nums.length;
  const bt = (idx) => {
    if (idx === len) {
      ans.push(res.slice());
      return;
    }
    
    for (let i=idx; i<len; i++) {
      res.push(nums.shift());
      bt(idx+1);
      nums.push(res.pop());
    }
  }
  
  bt(0);
  return ans;
};

// DP way?
