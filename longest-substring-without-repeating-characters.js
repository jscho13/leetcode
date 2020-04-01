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
