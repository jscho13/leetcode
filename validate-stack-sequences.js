/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

// O(n)
const validateStackSequences = (push, pop) => {
  let ans = [];
  while (push.length>0) {
    ans.push(push.shift());
    while (pop[0] === ans[ans.length-1] && ans.length) {
      pop.shift();
      ans.pop();
    }
  }
  return !pop.length;
};
