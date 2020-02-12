/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum = (candidates, target) => {
  let ans = [];
  let res = [];
  bt(ans, res, 0, candidates, target);
  return ans;
};

const bt = (ans, res, j, candidates, target) => {
  let sum = res.reduce((acc, val) => { return acc+val }, 0);
  if (sum === target) {
    ans.push(res.slice(0));
  }
  
  if (sum > target) return;

  for (let i=j; i<candidates.length; i++) {
    res.push(candidates[i]);
    bt(ans, res, i, candidates, target);
    res.pop();
  }
}
