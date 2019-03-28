// 9:30 - 30 min
// Attempt 2
var expressiveWords = function(S, words) {
  var ans=words.length;
  // order matters, so we need an array
  // each index needs to have a letter and number of chars
  var S = S.split('');
  var sA = [];
  var hash = {};
  for (var s=0; s<S.length; s++) {
    var c = S[s];
    if (!hash[c]) {
      hash = {};
      hash[c] = 0;
      sA.push(hash);
    }
    hash[c] = hash[c]+1; 
  }
  
  hash = {};
  for (var w=0; w<words.length; w++) {
    var word = words[w];
    var wA = [];
    for (var c=0; c<word.length; c++) {
      var ch=word[c];
      if (!hash[ch]) {
        hash = {};
        hash[ch] = 0;
        wA.push(hash);
      }
      hash[ch] = hash[ch]+1; 
    }

    for (var i=0; i<sA.length; i++) {
      // there are three fail cases:
      // character doesnt match
      if (wA[i] === undefined) {
        ans--;
        break;
      } else if (Object.keys(sA[i])[0] != Object.keys(wA[i])[0]) {
        ans--;
        break;
      // more word chars
      } else if (Object.values(sA[i])[0] < Object.values(wA[i])[0]) {
        ans--;
        break;
      // more S chars and can't stretch
      } else if (Object.values(sA[i])[0] > Object.values(wA[i])[0] && Object.values(sA[i])[0] < 3) {
        ans--;
        break;
      }
    }
  }

  return ans;
};

console.log(expressiveWords("abcd", ["abc"]));
