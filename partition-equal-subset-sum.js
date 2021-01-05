/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Memoized
// O(n*sum)
// S(n)
const canPartition = (nums) => {
    let total = sum(nums);
    if (total%2 !== 0) return false;
    let half = total/2;
    let dp = new Array(nums.length).fill(new Array());
    
    // can either grab, or skip
    // keep track of index and sum
    const recurse = (total, idx) => {
        if (idx>=nums.length) return false;
        let t = total+nums[idx];
        if (dp[idx][t] !== undefined) {
            return dp[idx][t];
        } else if (t === half) {
            return true;
        } else {
            dp[idx][t] = false;
            return recurse(t, idx+1) || recurse(total, idx+1);
        }
    }
    
    return recurse(0, 0);
};

const sum = (ary) => {
    return ary.reduce((x, acc) => { return x+acc }, 0);
}
