/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = (matrix) => {
  matrix = matrix.map(row => {
    return row.map(val => { return parseInt(val) });
  });
  
  let max=0;
  for (let y=0; y<matrix.length; y++) {
    for (let x=0; x<matrix[y].length; x++) {
      if (matrix[y][x]===1 && matrix[y-1] && matrix[y-1][x-1] && matrix[y-1][x]>0 && matrix[y][x-1]>0 && matrix[y-1][x-1]>0) {
        let min = Math.min(matrix[y-1][x], matrix[y][x-1], matrix[y-1][x-1]);
        matrix[y][x] = min + 1;
      }
      max = Math.max(matrix[y][x], max);
    }
  }
  return Math.pow(max,2);
};
