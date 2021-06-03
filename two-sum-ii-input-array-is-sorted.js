/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (numbers, target) => {

};

// Time-complexity: O(n)
// Attempt: 1
// var twoSum = function(numbers, target) {
//   var ans = [];
//   var [b,t] = [0, numbers.length-1];
//   var sum;
//   while (b<t) {
//     sum = numbers[b]+numbers[t];
//     if (sum > target) {
//       t--;
//     } else if (sum < target) {
//       b++;
//     } else {
//       ans = [b+1, t+1];
//       break;
//     }
//   }
//   return ans;
// };



// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
// 
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
// 
// Note:
// 
// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.
// Example:
// 
// Input: numbers = [2,6,9,10,11,15,22], target = 17
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
