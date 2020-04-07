/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// O(n)
// S(1)
const minWindow = (s, t) => {
  if (t.length===0) return '';
  
  let [l,r,counter,dict,str,min] = [0,0,0,{},'',Number.POSITIVE_INFINITY];
  for (let i=0; i<t.length; i++) {
    if (dict[t[i]]) {
      dict[t[i]] = dict[t[i]]+1;
    } else {
      dict[t[i]] = 1;
      counter++;
    }
  }
  
  while (r<s.length) {
    if (--dict[s[r]] === 0) counter--;
    while (counter === 0) {
      if(++dict[s[l]] === 1) counter++;
      if (r-l<min) {
        min = Math.min(r-l);
        str = s.slice(l, r+1);
      }
      l++;
    }
    r++;
  }
  
  return str;
};
