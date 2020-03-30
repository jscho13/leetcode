/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// Can you solve this without converting to a string?
// O(n)
// S(1)
const hammingWeight = (n) => {
  let num = n.toString(2);
  let count = 0;
  for (let i=0; i<num.length; i++) {
    if (num[i] === '1') count++;
  }
  return count;
};
