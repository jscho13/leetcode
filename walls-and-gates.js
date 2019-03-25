/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

// Time-complexity: O(m*n)
// Space-complexity: O(m*n)

var wallsAndGates = function(rooms) {
  if (rooms.length == 0) return [];
  var m = rooms.length;
  var n = rooms[0].length;
  var stack = [];
  var depth=1;
  for (var y=0; y<m; y++) {
    for (var x=0; x<n; x++) {
      // find all gate neighbors
      if (rooms[y][x] === 0) {
        stack = stack.concat(findNeighbors(y, x, rooms, depth));
      }
    }
  }
  
  while (stack.length > 0) {
    depth++;
    var gates = stack.length;
    // visit all neighbors and mark visited ones with depth, and others with -1
    for (var g=0; g<gates; g++) {
      var gate = stack.shift();
      // add visited rooms to queue
      stack = stack.concat(findNeighbors(gate['y'], gate['x'], rooms, depth));
    }
  }
};

var findNeighbors = function(y, x, rooms, depth) {
  // i = row, j = col
  var neighbors = [];
  var INF = 2147483647;
  // north
  if (rooms[y-1] && rooms[y-1][x] == INF) {
    rooms[y-1][x] = depth;
    neighbors.push({'y':y-1, 'x':x})
  }
  
  // east
  if (rooms[y] && rooms[y][x+1] == INF) {
    rooms[y][x+1] = depth;
    neighbors.push({'y':y, 'x':x+1});
  }

  // south
  if (rooms[y+1] && rooms[y+1][x] == INF) {
    rooms[y+1][x] = depth;
    neighbors.push({'y':y+1, 'x':x});
  }

  // west
  if (rooms[y] && rooms[y][x-1] == INF) {
    rooms[y][x-1] = depth;
    neighbors.push({'y':y, 'x':x-1});
  }
  
  return neighbors;  
}
