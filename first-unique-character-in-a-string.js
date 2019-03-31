var firstUniqChar = function(s) {
  var s = s.split('');
  var hash = {};
  for (var i=0; i<s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = [i];  
    } else {
      hash[s[i]].push(i);
    }
  }
  for (var key in hash) if (hash[key].length === 1) return hash[key][0];
  return -1;
};
