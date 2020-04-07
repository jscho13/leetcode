/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum = (candidates, target) => {
  let ans=[];
  let res=[];
  
  const bt = (idx) => {
    let sum = res.reduce((acc, val) => { return acc+val },0);
    if (sum === target) {
      ans.push(res.slice(0));
      return;
    }
    if (sum > target) return;
    
    for (let i=idx; i<candidates.length; i++) {
      res.push(candidates[i]);
      bt(i);
      res.pop();
    }
    return;
  }
  
  bt(0);
  return ans;
};
