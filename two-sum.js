/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n^2)
// S(1)
// const twoSum = (num, target) => {
//   for (let i=0; i<num.length; i++) {
//     for (let j=i; j<num.length; j++) {
//       if (num[i]+num[j] === target) return [i,j];
//     }
//   }
// };

// O(n)
// S(n)
// const twoSum = (num, target) => {
//   let hash = {};
//   for (let i=0; i<num.length; i++) {
//     let n = num[i];
//     let diff = (target-n);
//     if (hash[diff] != undefined) {
//       return [i, hash[diff]];
//     }
//     hash[n] = i;
//   }
// }

// which do you prefer?
