// Time-complexity: O(n*m)
// Space-complexity: O(1)

// Correct answer
// Time-complexity: O(2^n+m)
// Space-complexity: O(m*n) -- call stack is included in space complexity

var longestIncreasingPath = function(matrix) {
  var ans=0;
  // loop through the matrix
  for (var i=0; i<matrix.length; i++) {
    for (var j=0; j<matrix[0].length; j++) {
      // at each spot find the longest increasing path using DFS
      ans = Math.max(ans, dfs(matrix, i, j));
    }
  }

  // return the longest path
  return ans;
};

var dfs = function(matrix, y, x) {
  // u, d, l, r
  var directions = [[1,0],[-1,0],[0,-1],[0,1]];
  var depth=0;
  var tail=true;

  for (var d=0; d<directions.length; d++) {
    var yShift=directions[d][0]+y;
    var xShift=directions[d][1]+x;
    if (yShift > -1
        && yShift < matrix.length
        && xShift > -1
        && xShift < matrix[0].length
        && matrix[yShift][xShift] > matrix[y][x]) {
      tail = false;
      depth = Math.max(dfs(matrix, yShift, xShift), depth); 
    }
  }

  // dfs base case will return one
  if (tail) return 1;

  // or it will return Max of current depth + dfs from all directions
  return depth + 1;
}

// console.log(longestIncreasingPath([[2,1,1],[1,1,1],[1,1,1]]));
// console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]));
// console.log(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]]));
console.log(longestIncreasingPath([[0,1,2,3,4,5,6,7,8,9],[19,18,17,16,15,14,13,12,11,10],[20,21,22,23,24,25,26,27,28,29],[39,38,37,36,35,34,33,32,31,30],[40,41,42,43,44,45,46,47,48,49],[59,58,57,56,55,54,53,52,51,50],[60,61,62,63,64,65,66,67,68,69],[79,78,77,76,75,74,73,72,71,70],[80,81,82,83,84,85,86,87,88,89],[99,98,97,96,95,94,93,92,91,90],[100,101,102,103,104,105,106,107,108,109],[119,118,117,116,115,114,113,112,111,110],[120,121,122,123,124,125,126,127,128,129],[139,138,137,136,135,134,133,132,131,130],[0,0,0,0,0,0,0,0,0,0]]));
