/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// O(n + nlogn)
// S(n)
const insert = (intervals, newInterval) => {
  if (intervals.length === 0) return [newInterval];
  let ans = [];
  let done = false;
  
  while (intervals.length) {
    let interval = intervals.shift();
    if (newInterval && newInterval[0] <= interval[1]
       && newInterval[1] >= interval[0]) {
      newInterval[0] = Math.min(interval[0], newInterval[0]);
      newInterval[1] = Math.max(interval[1], newInterval[1]);
      done = true;
    } else {
      if (done) {
        ans.push(newInterval);
        newInterval = null;
        done = false;
      }
      ans.push(interval);
    }
  }
  
  if (newInterval) ans.push(newInterval);
  ans.sort((a,b) => { return a[0]-b[0] })
  return ans;
};
