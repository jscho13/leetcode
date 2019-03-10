/**
 * @param {number[][]} grid
 * @return {number}
 */
var countCornerRectangles = function(grid) {
  var ans=0;

  // outer loop is columns
  for (var x=0; x<grid[0].length; x++) {
    // inner loop is rows
    for (var y=0; y<grid.length-1; y++) {
      // top left
      if (grid[y][x] === 1) {
        ans += findRects(x, y, grid);
      }
    }
  }
  
  return ans;
};

// go down the row
// if there's another 1, then you go over all the 1s to the right of the pair
var findRects = function(x1, y1, grid) {
  var counter = 0;
  for (var y=y1+1; y<grid.length; y++) {
    // bottom left
    if (grid[y][x1] === 1) {
      for(var x=x1+1; x<grid[0].length; x++) {
        // top right && bottom right
        if(grid[y1][x] === 1 && grid[y][x] === 1) {
          counter += 1;
        }
      }
    }
  }
  return counter;
}
