/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
// O(2^n)
// S(2^n)
const shortestWay = (source, target) => {
  let dict = new Set();
  let res = [];
  source = source.split('');
  
  const bt = () => {
    if (s.length === 0) return;
    for (let i=0; i<source.length; i++) {
      res.push(source.shift());
      dict.add(res.join(''));
      bt();
      source.push(res.pop());
    }
  }
  bt();

  let count=0;
  let l=0;
  let r=target.length;
  while (l<r) {
    let str = target.slice(l,r);
    if (dict.has(str) {
      l=r;
      r=target.length;
      count++;
    } else {
      r--;
    }
  }
  
  return l===target.length ? count : -1;
};
