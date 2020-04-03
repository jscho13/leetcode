/**
 * @param {character[][]} grid
 * @return {number}
 */
// O(m*n)
// S(1)
const numIslands = (grid) => {
  let count = 0;
  let dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  
  const bfs = (y,x) => {
    for (let d=0; d<dirs.length; d++) {
      let dir = dirs[d];
      let yP = y+dir[0]
      let xP = x+dir[1];
      if (grid[yP] && grid[yP][xP] === "1") {
        grid[yP][xP] = "0";
        bfs(yP, xP);
      }
    }
  }
  
  for (let i=0; i<grid.length; i++) {
    for (let j=0; j<grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        bfs(i,j);
      }
    }
  }
  
  return count;
};


// Old
var numIslands = function(grid) {
  // north, east, south, west
  var directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  var islands = 0;
  // iterate through all nodes
  for (var y=0; y<grid.length; y++) {
    for (var x=0; x<grid[0].length; x++) {
      
      if (grid[y][x] === '1') {
        islands++;
        var queue = [[y, x]];
        grid[y][x] = 0;

        // convert each island to water
        while (queue.length > 0) {
          var land = queue.shift();
          for (var d=0; d<4; d++) {
            var row = directions[d][0]+land[0];
            var col = directions[d][1]+land[1];
            if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length && grid[row][col] === '1') {
              grid[row][col] = 0;
              queue.push([row, col]);
            }
          }
        }
      }
      
    }
  }
  return islands;
};
