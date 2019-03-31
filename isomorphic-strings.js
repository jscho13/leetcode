// T(n*m)
// S(n)

var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  // loop through both strings
  // create a hash with a value of [char1, char2]
  // if a char doesn't match or if there's a collision return false
  var s = s.split('');
  var t = t.split('');
  var dict1 = {};
  var dict2 = {};
  for (var i=0; i<s.length; i++) {
    var ch1 = s[i]+'char';
    var ch2 = t[i]+'char';
    (!dict1[ch1]) ? dict1[ch1] = [i] : dict1[ch1].push(i);
    (!dict2[ch2]) ? dict2[ch2] = [i] : dict2[ch2].push(i);
  }
  
  var val1 = Object.values(dict1);
  var val2 = Object.values(dict2);
  if (JSON.stringify(val1) !== JSON.stringify(val2)) return false;
  
  return true;
};
