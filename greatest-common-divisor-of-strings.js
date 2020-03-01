/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

// O(m(n+m))
// S(n+m)

const gcdOfStrings = (str1, str2) => {
  let ans = '';
  for (let i=1; i<=str2.length; i++) {
    let subset = str2.slice(0,i);
    let str1c = subset;
    let str2c = subset;
    while (str1c.length < str1.length) str1c += subset;  
    while (str2c.length < str2.length) str2c += subset;  
    if (str1c === str1 && str2c === str2) ans = subset;      
  }

  return ans;
};

