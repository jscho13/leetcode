/**
 * @param {string} s
 * @return {number}
 */
// O(n)
// S(1)
const lengthOfLongestSubstring = (s) => {
  let dict = {};
  let [l,r,ans] = [0,0,0];
  
  while (l<=r && r<s.length) {
    dict[s[r]] = dict[s[r]] ? dict[s[r]]+1 : 1;
    while (dict[s[r]] > 1) {
      dict[s[l]]--;
      l++;
    }
    r++;
    ans = Math.max(ans, r-l);
  }
  
  return ans;
};


// Eh I think the first one is better
// The obj line here is cleaner though
const lengthOfLongestSubstring = (s) => {
    let [l,r]=[0,0];
    let length = 0;
    let obj = {};
    while (r<=s.length) {
        obj[s[r]] = obj[s[r]]+1 || 1;
        length = Math.max(length, r-l);
        while (obj[s[r]] > 1) {
            obj[s[l]]--;
            l++;
        }
        r++;
    }
    
    return length;
};
