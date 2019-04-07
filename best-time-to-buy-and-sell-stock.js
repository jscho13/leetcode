
var maxProfit = function(prices) {
  var price = 0;
  var diff = 0;
  var max = Number.MIN_SAFE_INTEGER;
  var min = Infinity;
  for (var p=0; p<prices.length; p++) {
    if (prices[p] < min) {
      min = prices[p];
      max = prices[p];
    } else if (prices[p] > max) {
      max = prices[p];
      diff = max-min;
    }
    
    price = Math.max(diff, price);
  }
  
  return price;
};
