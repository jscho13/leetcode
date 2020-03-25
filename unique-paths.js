/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// First attempt DP
// O(n*m)
// S(n*m)
const uniquePaths = (m, n) => {
  let ary = new Array(n+1).fill(0);
  for (let i=0; i<ary.length; i++) ary[i] = new Array(m+1).fill(0);
  ary[1][1] = 1;
  
  for (let y=1; y<ary.length; y++) {
    for (let x=1; x<ary[y].length; x++) {
      let below = ary[y-1][x];
      let left = ary[y][x-1];
      ary[y][x] = left+below+ary[y][x];
    }
  }
  
  return ary[n][m] || 1;
};
