/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = (s) => {
  let [r,len]=[0,s.length];
  
  for (let r=1; r<len; r++) {
    if (len%(r) === 0) {
      let str='';
      while (str.length<len) str+=s.slice(0, r);
      if (str===s) return true;
    }
  }
  
  return false;
};
