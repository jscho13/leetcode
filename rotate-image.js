/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// O(n*m)
// S(1)

const rotate = (matrix) => {
  // transform along y = x/2
  for (let y=0; y<matrix.length; y++) {
    for (let x=y; x<matrix[y].length; x++) {
      let temp = matrix[y][x];
      matrix[y][x] = matrix[x][y];
      matrix[x][y] = temp;
    }
  }

  for (let y=0; y<matrix.length; y++) {
    for (let x=0; x<matrix[y].length/2; x++) {
      let len = matrix[y].length-1-x;
      let temp = matrix[y][x];
      matrix[y][x] = matrix[y][len];
      matrix[y][len] = temp;
    }
  }

  return matrix;
};
