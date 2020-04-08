/**
 * @param {number} n
 * @return {number}
 */
// O(root n*n)
// S(n)
const numSquares = (n) => {
  let dp = [new Array(n+1).fill(0)];
  let die = 0;
  let root = Math.floor(Math.sqrt(n));
  dp[die][0] = 1;

  while (dp[die][n] === 0) {
    dp.push(new Array(n+1).fill(0));
    die++;
    
    for (let i=1; i<=root; i++) {
      let square = Math.pow(i, 2);
      for (let j=1; j<=n; j++) {
        if (dp[die-1][j-square]>0) dp[die][j] = dp[die-1][j-square]+1; 
      }
    }
  }

  return dp[die][n]-1;
};
