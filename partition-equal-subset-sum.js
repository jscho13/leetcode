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


/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Tabulation
// O(n*sum)
// S(n*sum)
const canPartition = (nums) => {
    let sum = nums.reduce((x, acc) => { return x+acc }, 0);
    if (sum%2 !== 0) return false;
    let half = sum/2;
    
    let dp = new Array(nums.length);
    for (let i=0; i<dp.length; i++) {
        dp[i] = new Array(half+1);
        dp[i][0] = true;
    }
    
    for (let r=0; r<nums.length; r++) {
        for (let s=1; s<=half; s++) {
            let c = nums[r];
            if ((s-c)===0) {
                dp[r][s] = true;
            } else if (dp[r-1] && dp[r-1][s] === true) {
                dp[r][s] = true;
            } else if (dp[r-1] && dp[r-1][s-c] === true) {
                dp[r][s] = true;
            }
        }
        if (dp[r][half]) return true;
    }

    return false;
};
