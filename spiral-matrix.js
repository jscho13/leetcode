/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// O(n)
// S(n)
const spiralOrder = (matrix) => {
  if (matrix.length===0) return [];
  let [l,b,t,r] = [0,0,matrix.length-1,matrix[0].length-1]
  let [y,x] = [0,-1];
  let str = [];
  while (y>b || y<t || x>l || x<r) {
    while (x<r) {
      x++;
      if (matrix[y][x] != null) str.push(matrix[y][x]);
      matrix[y][x]=null;
    }
    b++;
    
    while (y<t) {
      y++;
      if (matrix[y][x] != null) str.push(matrix[y][x]);
      matrix[y][x]=null;
    }
    r--;
    
    while (x>l) {
      x--;
      if (matrix[y][x] != null) str.push(matrix[y][x]);
      matrix[y][x]=null;
    }
    t--;
    
    while (y>b) {
      y--;
      if (matrix[y][x] != null) str.push(matrix[y][x]);
      matrix[y][x]=null;
    }
    l++;
  }
  
  return str;
};
