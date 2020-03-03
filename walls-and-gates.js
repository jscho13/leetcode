/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

// O(n*m)
// S(n*m)
const wallsAndGates = (rooms) => {
  let dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  let q = [];
  let inf = Math.pow(2,31)-1;

  const bfs = (count) => {
    while (q.length) {
      let len = q.length;
      count++;

      while (len) {
        let n = q.shift();
        for (let d=0; d<dirs.length; d++) {
          let dir = dirs[d];
          let ny = n[0]+dir[0]; 
          let nx = n[1]+dir[1]; 
          if (rooms[ny] && rooms[ny][nx] > 0) {
            if (rooms[ny][nx] === inf || count < rooms[ny][nx]) {
              rooms[ny][nx] = count;
              q.push([ny,nx]);
            }
          }
        }
        len--;
      }
    }
  }

  for (let i=0; i<rooms.length; i++) {
    for (let j=0; j<rooms[i].length; j++) {
      if (rooms[i][j] === 0) {
        q.push([i,j]);
        bfs(0);
      }
    }
  }
}
