
var coinChange = function(coins, amount) {
  var dp = new Array(amount+1).fill(Infinity);
  dp[0] = 0;
  for (var a=1; a<=amount; a++) {
    for (var c=0; c<coins.length; c++) {
      if (dp[a-coins[c]] !== undefined) {
        dp[a] = Math.min(dp[a-coins[c]]+1, dp[a]);
      }
    }
  }
  
  return (dp[dp.length-1] === Infinity) ? -1 : dp[dp.length-1];
};

