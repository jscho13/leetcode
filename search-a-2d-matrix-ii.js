// O(n + m)
// S(1)

const searchMatrix = (matrix, target) => {
  let ans = false;
  if (matrix.length === 0 || matrix[0].length === 0) return ans;
  
  let x=0;
  let y=matrix.length-1;
  while (true) {
    if (target < matrix[y][x]) {
      y--;
    } else if (target > matrix[y][x]) {
      x++;
    } else {
      ans = true;
      break;
    }
    if (y < 0 || x >= matrix[0].length) break;
  }
  return ans;
}
