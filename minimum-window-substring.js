// Attempts: 6

// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
// 
// Example:
// 
// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:
// 
// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

// YES ANSWER IS DOWN THERE. DON'T LOOK
const minWindow = (s, t) => {
}




































/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// O(n*m+m) --> the object.values is suboptimal. it can be a count.
// when the key hits 0 drop the count by 1. dont need to loop through all values every time
// S(m)
const minWindow = (s, t) => {
  let dict = {};
  for (let i=0; i<t.length; i++) dict[t[i]] = dict[t[i]] ? dict[t[i]]+1 : 1;

  let [l, r, min] = [0, 0, Number.POSITIVE_INFINITY];
  let ans = "";
  
  while (l<=r && r<s.length) {
    if (dict[s[r]] !== undefined) { dict[s[r]]-- };
    let word = Object.values(dict).every((x) => { return x<1 });
    
    while (word) {
      if (r-l<min) {
      console.log(min);
        min = r-l;
        ans = s.slice(l, r+1);
      }
      if (dict[s[l]] !== undefined) {
        let count = dict[s[l]]++;
        word = (count === 0) ? false : true;
      }
      l++;
    }

    r++;
  }
  
  return ans;
};
