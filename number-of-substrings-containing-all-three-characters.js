// O(n)
// S(n)
const numberOfSubstrings = (s) => {
  let [l,r,dict,count,total]=[0,0,{'a':0,'b':0,'c':0},0,0];
  
  while (r<s.length) {
    if (++dict[s[r]] === 1) count++;
    while (count === 3) {
      total = total+s.length-r;
      if (--dict[s[l]] === 0) count--;
      l++;
    }
    r++;
  }
  
  return total;
};
