/**
 * @param {number[]} cost
 * @return {number}
 */
// Memoization
// O(n)
// S(n)
const minCostClimbingStairs = (cost) => {
    let memo = new Array(cost.length+1).fill(0);

    const recurse = (idx) => {
        if (idx === 0 || idx === 1) {
            return cost[idx];
        } else if (memo[idx]) {
            return memo[idx];
        } else {
            let res1 = recurse(idx-1);
            let res2 = recurse(idx-2);
            let ans = Math.min(res1, res2);
            if (cost[idx]) ans += cost[idx];
            memo[idx] = ans;
        }
        return memo[idx];
    }
    
    return recurse(cost.length);
};

// Tabulation
// O(2^n)
// S(n)
// const minCostClimbingStairs = (cost) => {
//     let dp = new Array(cost.length+1).fill(Number.POSITIVE_INFINITY);
//     dp[0] = 0;
//     dp[1] = 0;
    
//     const traverse = (idx) => {
//         for (let i=idx+1; i<idx+3; i++) {
//             if (i > cost.length) return;
//             if (i === 1) {
//                 dp[i] = 0;
//             } else {
//                 dp[i] = Math.min(cost[idx]+dp[idx], dp[i]);
//             }
//         }
//         traverse(idx+1);
//         traverse(idx+2);
//     }
    
//     traverse(0);
//     return dp[cost.length];
// };
