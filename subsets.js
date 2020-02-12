/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// O(2^n * n) -- generate all subsets, copy to output list
// S(2^n) -- each n elements could be present or not

const subsets = (nums) => {
	let [ans, res] = [[], []];

  const backtrack = (j=0) => {
    if (res.length > nums.length) return;
    ans.push(res.slice(0));
    for (let i=j; i<nums.length; i++) {
      res.push(nums[i]);
      backtrack(i+1);
      res.pop();
    }  
  }
	
  backtrack();
  return ans;
};





// This one was looked up but very clever...
// you basically add to the existing list. It's the recursive solution
// []
// 
// [1]
// 
// [2]
// [1,2]
// 
// [3]
// [1,3]
// [2,3]
// [1,2,3]
//
// const subsets = (nums) => {
// 	let ans = [[]];
// 	for (let i=0; i<nums.length; i++) {
//     let num = nums[i];
// 
//     let len = ans.length;
//     for (let x=0; x<len; x++) {
//       let ary = ans[x].concat(nums[i]);
//       ans.push(ary);
//     }
// 	}
// 
//   return ans;
// };
//
