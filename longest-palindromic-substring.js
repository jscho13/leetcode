
// O(n^3)
var longestPalindrome = function(s) {
  var max = 0;
  var ans = '';
  for (var r=0; r<s.length; r++) {
    for (var l=0; l<=r; l++) {
      var temp = s.slice(l, r+1).split('').reverse().join('');
      str = s.slice(l, r+1);
      if (temp === str && (r-l) >= max) {
        max = r-l;
        ans = s.slice(l, r+1);
      }
    }
  }

  return ans;
};

// O(n^2)
var longestPalindrome = function(s) {
  var max = 0;
  var ans = '';
  for (var r=0; r<s.length; r++) {
    for (var j=0; j<2; j++) {
      var left=r;
      var right=r+j;
      while (s[left] && s[left] == s[right]) {
        max = Math.max(right-left+1, max);
        left--;
        right++;
      }
      
      if (max > ans.length) {
        ans = s.slice(left+1, right);
      }
    }
  }
  
  return ans;
};

