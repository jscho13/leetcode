/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// Attempt: 3
var wordBreak = function(s, wordDict) {
  var tracker = new Array(s.length+1).fill(0);
  tracker[0] = 1;
  
  for (var i=0; i<s.length; i++) {
    for (var w=0; w<wordDict.length; w++) {
      var word = wordDict[w];
      if (word[0] === s[i]) {
        var c;
        for (c=0; c<word.length; c++) {
          if (word[c] != s[i+c]) break;
        }
        if (c === word.length && tracker[i]) tracker[i+c] = 1;
      }
    }
  }
    
  return tracker[tracker.length-1];
}

// "leetcode"
// ["leet", "code"]
// "applepenapple"
// ["apple", "pen"]
// "catsandog"
// ["cats", "dog", "sand", "and", "cat"]
// "cars"
// ["car", "ca", "rs"]
// "aaaaaaa"
// ["aaaa","aaa"]
