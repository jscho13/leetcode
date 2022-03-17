/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    // initialize and set default value
    let dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;

    // iterate through array
    for (let amt=0; amt<amount; amt++) {
        // add minimum coin value to array
        for (let c=0; c<coins.length; c++) {
            if (dp[amt] !== Infinity) {
                let updatedAmt = amt+coins[c];
                dp[updatedAmt] = Math.min(dp[amt]+1, dp[updatedAmt]);
            }
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
};
