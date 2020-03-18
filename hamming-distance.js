/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
  let xOrify = x^y;
  let xOr = xOrify.toString(2);
  let count=0;
  for (let i=0; i<xOr.length; i++) {
    if (xOr[i] === '1') count++;
  }
  
  return count;
};
