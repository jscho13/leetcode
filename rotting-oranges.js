/**
 * @param {number[][]} grid
 * @return {number}
 */

// O(n)
// S(n)
// optimal but a really bad implementation

const orangesRotting = (grid) => {
  let q = [];
  let hasFruit = false;
  for (let i=0; i<grid.length; i++) {
    for (let j=0; j<grid[0].length; j++) {
      if (grid[i][j] === 2) q.push([i,j]);
      if (grid[i][j] === 1) hasFruit = true;
    }
  }
  if (q.length === 0 && hasFruit) return -1;
  if (q.length === 0 && !hasFruit) return 0;
  
  let counter = -1;
  let dir = [[-1,0], [1,0], [0,1], [0,-1]];
  while (q.length > 0) {
    let length = q.length;
    while (length > 0) {
      let n = q.shift();
      for (let d=0; d<dir.length; d++) {
        let y = dir[d][0]+n[0];
        let x = dir[d][1]+n[1];
        if (grid[y] !== undefined && grid[y][x] === 1) {
          grid[y][x] = 2;
          q.push([y,x]);
        }
      }
      length--;
    }
    counter++;
  }
  
  for (let i=0; i<grid.length; i++) {
    for (let j=0; j<grid[0].length; j++) if (grid[i][j] === 1) return -1;
  }

  return counter;
};

