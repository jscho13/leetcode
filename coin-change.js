/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// O(n*c)
// S(n)
const coinChange = (coins, amount) => {
  let dp = new Array(amount+1).fill(-1);
  dp[0]=0;
  
  for (let c=0; c<coins.length; c++) {
    let coin = coins[c];
    for (let i=0; i<dp.length; i++) {
      if (dp[i-coin] > -1) {
        if (dp[i] === -1) { 
          dp[i] = dp[i-coin]+1;
        } else {
          dp[i] = Math.min(dp[i-coin]+1, dp[i]);
        }
      } 
    }
  }

  return dp[amount];
};
