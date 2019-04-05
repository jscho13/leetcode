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

var minWindow = function(s, t) {
  var [r,l] = [0,0]; 
  var dict = {};
  var min = Infinity;
  var ans = "";

  for (var i=0; i<t.length; i++) {
    var c=t[i];
    dict[c] = dict[c] || 0;
    dict[c]++;
  }

  var counter = Object.keys(dict).length;
  while (r<s.length) {
    var c=s[r];
    if (dict[c] != undefined) dict[c]--;
    if (dict[c] === 0) counter--;

    while (counter === 0) {
      var lC = s[l];
      if (dict[lC] != undefined) dict[lC]++;
      if (dict[lC] > 0) counter++;
      if (min > r-l+1) {
        ans = s.substring(l, r+1);
        min = ans.length;
      }
      l++;
    }
    r++;
  }
  
  return ans;
}

console.log(minWindow('a', 'aa'));
