/*
 O(n+m)
 S(m)
*/
const fairCandySwap = (A, B) => {
  const sumA = A.reduce((acc, val) => { return acc+val });
  const sumB = B.reduce((acc, val) => { return acc+val });
  const diff = (sumB-sumA)/2;

  const dict = {};
  B.forEach((x, idx) => { dict[x] = idx });
  
  let ans;
  A.forEach((x, idx) => {
    if (dict[x+diff] !== undefined) {
      ans = [x, x+diff];
    }
  });
  
  return ans;
};
