// Attempts: 2

var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];
  var d = 'e';
  var [y,x] = [0,0]
  // n e s w
  var bounds = [-1, matrix[0].length, matrix.length, -1];
  var ans = [];
  while (y > bounds[0] && x < bounds[1] && y < bounds[2] && x > bounds[3]) {
    ans.push(matrix[y][x]);
    if (d === 'e') {
      x++;
      if (x+1 === bounds[1]) {
        d = 's';
        x--;
        y++;
        bounds[0]++;
      }
    } else if (d === 's') {
      y++;
      if (y === bounds[2]) {
        d = 'w';
        y--;
        x--;
        bounds[1]--;
      }
    } else if (d === 'w') {
      x--;
      if (x === bounds[3]) {
        d = 'n';
        x++;
        y--;
        bounds[2]--;
      }
    } else {
      y--;
      if (y === bounds[0]) {
        d = 'e';
        y++;
        x++;
        bounds[3]++;
      }
    }
  }

  return ans;
};
