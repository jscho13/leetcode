/**
 * @param {number} n
 * @return {number}
 */
// O(n*k)
// S(n)
const climbStairs = (n) => {
  let ary = new Array(n+1).fill(0);
  ary[0]=1;
  
  for (let j=1; j<=n; j++) {
    for (let s=1; s<=2; s++) {
      ary[j] = (ary[j-s] || 0)+ary[j];
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


