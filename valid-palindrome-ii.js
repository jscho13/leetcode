/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {  
  let l=0;
  let r=s.length-1;
  while (s[l] === s[r] && l<=r) {
    if (l===r) return true;
    l++;
    r--;
  }
  
  let left = s.slice(0,l) + s.slice(l+1, s.length);
  let right = s.slice(0,r) + s.slice(r+1, s.length);

  const isPalin = (s) => {
    for (let i=0; i<s.length/2; i++) {
      if (s[i] != s[s.length-1-i]) return false;
    }
    return true;
  }
  if (isPalin(left) || isPalin(right)) return true;
  return false;
};
