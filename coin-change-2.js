/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = (amount, coins) => {
  let ans = new Array(amount+1).fill(0);
  ans[0] = 1;

  for (let i=0; i<coins.length; i++) {
    let coin = coins[i];
    for (let j=coin; j<amount+1; j++) {
      ans[j] = ans[j-coin]+ans[j];
    }
  }

  return ans[amount];
}
