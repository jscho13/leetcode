// Attempt: 3
// Time: O(n)
// Space: O(n)

var lengthOfLongestSubstringKDistinct = function(s, k) {
  var [r,l,ans,counter] = [0,0,0,0];
  var hash = {};
  while (r < s.length) {
    var rChar = s[r];
    if (!hash[rChar ]) {
      hash[rChar] = 1;
      counter++;
    } else {
      hash[rChar]++;
    }

    while (counter === k+1) {
      var lChar = s[l];
      hash[lChar]--;
      if (hash[lChar] === 0) counter--;
      l++;
    }

    ans = Math.max(ans, r-l+1);
    r++;
  }

  return ans;
}


console.log(lengthOfLongestSubstringKDistinct('eceba', 2));
console.log(lengthOfLongestSubstringKDistinct('aa', 1));
