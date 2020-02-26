
/**
* @param {number[]} prices
* @return {number}
*/

// You have the answer down there. DON'T LOOK. Can you do better?
const maxProfit = (prices) => {
}














































// 2019
// const maxProfit = (prices) => {
//   if (prices.length < 2) return 0;
//   let b = prices[0];
//   let s = prices[1];
//   let diff = s-b;
//   let lowest = Math.min(b,s);
//   for (let i=2; i<prices.length; i++) {
//     let diff2 = prices[i]-lowest;
//     if (diff2>diff) {
//       b=lowest;
//       s=prices[i];
//       diff = diff2;
//     }
//     if (prices[i]<lowest) lowest = prices[i];
//   }
// 
//   return (s-b < 0) ? 0 : s-b;
// };

// 2018
// var maxProfit = function(prices) {
//   var price = 0;
//   var diff = 0;
//   var max = Number.MIN_SAFE_INTEGER;
//   var min = Infinity;
//   for (var p=0; p<prices.length; p++) {
//     if (prices[p] < min) {
//       min = prices[p];
//       max = prices[p];
//     } else if (prices[p] > max) {
//       max = prices[p];
//       diff = max-min;
//     }
//     
//     price = Math.max(diff, price);
//   }
//   
//   return price;
// };

// Interview cake
// function getMaxProfit(prices) {
//   if (prices.length < 2) return 0;
//   let peak = prices[1]-prices[0];
//   let total = peak;
//
//   for (let i=2; i<prices.length; i++) {
//     let diff = prices[i]-prices[i-1];
//     total = diff+total;
//     if (diff > total) total = diff;
//     if (total > peak) peak = total;
//   }
//
//   return peak;
// }
