/**
 * @param {number[]} nums
 * @return {number}
 */
// Memoization
// O(n)
// S(n)
const rob = (nums) => {
    let memo = new Array(nums.length);
    let ans = 0;
    
    const recurse = (idx, sum) => {
        ans = Math.max(sum, ans);
        sum += nums[idx];

        if (idx >= nums.length) return;
        if (memo[idx] >= sum) return;
        memo[idx] = sum;
        recurse(idx+2, sum);
        recurse(idx+3, sum);
    }
    
    recurse(0, 0)
    recurse(1, 0)
    return ans;
}

// Tabulation
// O(n)
// S(n)
// const rob = (nums) => {
//     let dp = [];
//     let ans = 0;
//     for (let i=0; i<nums.length; i++) {
//         let b3 = dp[i-3] || 0;
//         let b2 = dp[i-2] || 0;
//         dp[i] = Math.max(b3+nums[i], b2+nums[i], nums[i]);
//         ans = Math.max(ans, dp[i]);
//     }
//     return ans;
// };
