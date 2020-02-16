/**
 * @param {number[][]} grid
 * @return {number}
 */

// Guess:
// O((n*m)(n+m)) -> going through every cell... so n+m. and each cell is going through the entire matrix potentially which is (n*m)
// S(n+m) -> callstack could be entire matrix... so n+m


// Answer:
// O(4^n) -> each option has 4 choices it can go to
// S(n) -> depth of recursion can go through entire graph (why is it not n+m... maybe because the height isn't be variable?)

const getMaximumGold = function(grid) {
  let ans = 0;
  let options = [[1,0],[-1,0],[0,1],[0,-1]];

  const bf = (y, x, sum) => {
    let maxSum = sum;
    if (grid[y] && grid[y][x] > 0) {
      sum += grid[y][x];
      grid[y][x] = grid[y][x] * -1;
      for (let opt=0; opt<options.length; opt++) {
        let [r, c] = options[opt];
        let sum2 = bf(y+r, x+c, sum)
        maxSum = Math.max(maxSum, sum2);
      }
      grid[y][x] = grid[y][x] * -1;
    }
    return maxSum;
  }
  
  for (let i=0; i<grid.length; i++) {
    for (let j=0; j<grid[i].length; j++) {
      ans = Math.max(bf(i, j, 0), ans);
    }
  }
  
  return ans;
};
