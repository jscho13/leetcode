var testString = ['race', 'lexicon', 'acer', 'buoy', 'ralph', 'joe'];

var sortAnagrams = function(s) {
  var anaDict = {};
  var ans = [];
  for (var i=0; i<s.length; i++) {
    var key = s[i].split('').sort().join();
    if (anaDict[key]) {
      anaDict[key].push(s[i]);
    } else {
      anaDict[key] = [s[i]];
    }
  }

  ans = s.sort();
  for (var key in anaDict) {
    if (anaDict[key].length > 0) {
      for (var i=1; i<anaDict[key].length; i++) {
        var ansIdx = ans.indexOf(anaDict[key][i]);
        ans.splice(ansIdx, 1);
        var origIdx = ans.indexOf(anaDict[key][0]);
        ans.splice(origIdx+1, 0, anaDict[key][i]);
      }
    }
  }

  return ans;
}

console.log(sortAnagrams(testString));
