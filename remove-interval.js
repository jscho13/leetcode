/**
 * @param {number[][]} intervals
 * @param {number[]} toBeRemoved
 * @return {number[][]}
 */
// O(n)
// S(1)
const removeInterval = (intervals, toBeRemoved) => {
    let ans = [];
    while (intervals.length) {
        let interval = intervals.shift();
        if (interval[0] < toBeRemoved[0] && toBeRemoved[1] < interval[1]) {
            ans.push([interval[0], toBeRemoved[0]]);
            ans.push([toBeRemoved[1], interval[1]]);
        } else if (toBeRemoved[0] <= interval[0] && interval[1] <= toBeRemoved[1]) {
            continue;
        } else if (interval[0] < toBeRemoved[0] && toBeRemoved[0] < interval[1]) {
            ans.push([interval[0], toBeRemoved[0]]);
        } else if (interval[0] < toBeRemoved[1] && toBeRemoved[1] < interval[1]) {
            ans.push([toBeRemoved[1], interval[1]]);
        } else {
            ans.push(interval.slice(0));
        }
    }
    
    return ans;
};
