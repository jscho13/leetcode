/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// O(n*m)
// S(n+m)
const longestCommonSubsequence = (text1, text2) => {
    let l1 = text1.length;
    let l2 = text2.length;
    let dp = new Array(l1+1);
    for (let i=0; i<=l1; i++) {
        if (i===0) {
            dp[i] = new Array(l2+1).fill(0);
        } else {
            dp[i] = new Array(l2+1);
        }
        dp[i][0] = 0;
    }
    
    const search = (i, j) => {
        if (i<1 || j<1) return;
        
        if (dp[i-1][j] === undefined) search(i-1, j);
        if (dp[i][j-1] === undefined) search(i, j-1);

        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        if (text1[i-1] === text2[j-1]) {
            dp[i][j] = dp[i-1][j-1]+1;
        }
    }

    search(l1, l2);
    return dp[l1][l2];
};
