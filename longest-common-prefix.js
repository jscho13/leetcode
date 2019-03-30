
// loop through strs and take the first word
// loop through the next words and truncate whatever doesn't match

// Time-complexity: O(n*m)
// Space-complexity: O(n)

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  var prefix = strs.shift();
  for (var w=0; w<strs.length; w++) {
    var word = strs[w];
    for (var i=0; i<prefix.length; i++) {
      if (prefix[i] != word[i]) {
        prefix = prefix.slice(0, i);
        break;
      }
    }
  }

  return prefix;
};
