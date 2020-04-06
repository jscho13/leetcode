/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
const numRollsToTarget = (d, f, target) => {
  let dp = new Array(d+1);
  for (let a=0; a<dp.length; a++) dp[a] = new Array(target+1).fill(0);
  dp[0][0]=1;
  
  for (let dice=1; dice<dp.length; dice++) {
    for (let n=1; n<=f; n++) {
      for (let i=1; i<=target; i++) {
        if (dp[dice-1][i-n]) {
          dp[dice][i] = (dp[dice-1][i-n]+dp[dice][i])%(Math.pow(10,9)+7);
        }
      }
    }
  }
  
  return dp[d][target];
};
