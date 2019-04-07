
var lengthOfLongestSubstring = function(s) {
  var hash = {};
  var l = 0;
  var max = 0;
  for (var r=0; r<s.length; r++) {
    var ch = s[r];
    hash[ch] = hash[ch] || 0;
    hash[ch]++;
    while (hash[ch] > 1) {
      var lCh = s[l];
      hash[lCh]--;
      l++;
    }
    max = Math.max(max, r-l+1);
  }
  
  return max;
}
