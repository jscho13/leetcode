// Attempts: 2

const findDiagonalOrder = (matrix) => {
  var ans = [];
  if (matrix.length === 0) return ans;
  var up = true;

  for (var x=0; x<matrix[0].length; x++) {
    var d1 = x;
    var d2 = 0;
    var ary = [];
    while (d1 >= 0 && d2 < matrix.length) {
      ary.push(matrix[d2][d1]);
      d1--;
      d2++;
    }
    
    ans = (up) ? ans.concat(ary.reverse()) : ans.concat(ary);
    up = !up;
  }
  
  for (var y=1; y<matrix.length; y++) {
    var d1 = matrix[0].length-1;
    var d2 = y;
    var ary = [];
    while (d1 >= 0 && d2 < matrix.length) {
      ary.push(matrix[d2][d1]);
      d1--;
      d2++;
    }
    
    ans = (up) ? ans.concat(ary.reverse()) : ans.concat(ary);
    up = !up;
  }
  
  return ans;
};
