/**
 * @param {number} num
 * @return {number[]}
 */
// O(n)
// S(n)
const countBits = (num) => {
  let ans = [];
  for (let i=0; i<=num; i++) {
    let bits=0;
    let mask=1;
    
    while (mask<=i) {
      if (mask & i) bits++;
      mask = mask << 1;
    }
    ans.push(bits);
  }
  
  return ans;
};
