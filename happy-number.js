/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
  let ary = [];
  while (n != 1) {
    if (ary.includes(n)) return false;
    ary.push(n);
    n=n.toString(10).split('');
    n=n.reduce((acc, v) => { return Math.pow(v, 2)+ acc }, 0)
  }
  return true;
};
