/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Finally got it on attempt 4.
const permute = (nums) => {
  let limit = nums.length;
  let ans = [];
  let res = [];
  
  const bt = () => {
    if (res.length === limit) {
      ans.push(res.slice(0));
      return;
    }
    
    for (let i=0; i<nums.length; i++) {
      res.push(nums.shift());
      bt();
      nums.push(res.pop());
    }
  }
  
  bt();
  return ans;
};
console.log(permute([1,2,3]));


// var permute = function(nums) {
//     const res = [];
//     backtrack(nums, res);
//     return res;
// };
// 
// function backtrack(nums, res, n = 0) {
//     if (n === nums.length - 1) {
//         res.push(nums.slice(0));
//         return;
//     }
//     for (let i = n; i < nums.length; i++) {
//         [nums[i], nums[n]] = [nums[n], nums[i]];
//         backtrack(nums, res, n + 1);
//         [nums[i], nums[n]] = [nums[n], nums[i]];
//     }
// }


// var permute = function(nums, n = 0) {
//     if (n >= nums.length) return [[]];
//     const res = [];
//     const prevs = permute(nums, n + 1);  // permutations of elements after n
//     for (let prev of prevs) {
//         for (let i = 0; i <= prev.length; i++) {
//             let p = prev.slice(0);
//             p.splice(i, 0, nums[n]);  // successively insert element n
//             res.push(p);
//         }
//     }
//     return res;
// };

