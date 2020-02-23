/**
 * @param {number} n
 * @return {number}
 */


// Dynamic programming
const climbStairs = (n) => {
  let steps = [1,2];
  let ary = new Array(n+1).fill(0);
  ary[0] = 1;
  for (let i=1; i<=n; i++) {
    for (let j=0; j<steps.length; j++) {
      let step = steps[j];
      if (step <= i) ary[i] = ary[i-step]+ary[i];
    }
  }

  return ary[n];
}


// Memoization
// const climbStairs = (n) => {
//   let memo=[];
// 
//   const recurse = (v) => {
//     if (v===1) return 1;
//     if (v===2) return 2;
// 
//     if (memo[v]) return memo[v];
//     return recurse(v-1)+recurse(v-2);
//   }
// 
//   memo[n] = recurse(n);
//   return memo[n];
// }


// Recursive
// const climbStairs = (n) => {
//   
//   const dp = (v) => {
//     if (v === 0) return 1;
//     if (v < 0) return 0;
//     return dp(v-1) + dp(v-2);
//   }
//   
//   return dp(n-1) + dp(n-2);
// };


