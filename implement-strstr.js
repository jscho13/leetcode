
// Attempts: 1

// Time-complexity: O(n*m)
// Space-complexity: O(1)

var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  var h = haystack.split('');
  hL = haystack.length;

  var n = needle.split('');
  nL = needle.length;

  for (var i=0; i<hL; i++) {
    if (h[i] === n[0]) {
      var j=0;
      for (; j<nL; j++) {
        if (h[i+j] != n[j]) break;
      }
      if (j === nL) return i;
    }
  }

  return -1;
};

// iterate through the array
// if there's match, go through needle and add haystacks match
