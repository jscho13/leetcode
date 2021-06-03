
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// O(n*n*m)
// S(m)
// Brute force
const wordBreak = (s, wordDict) => {
  let ary = new Array(s.length+1).fill(0);
  ary[0] = 1;
  
  for (let i=0; i<s.length; i++) {
    for (let j=i+1; j<s.length+1; j++) {
      let str = s.slice(i, j);
      if (wordDict.includes(str) && ary[i] === 1) {
        ary[j] = 1;
      }
    }
  }

  return ary[s.length] === 1;
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// O(nlogn+n*w)
// S(n*w)
// Sort first
const wordBreak = (s, wordDict) => {
  wordDict.sort((a,b) => { return b.length-a.length });

  s = s.split('');
  let options = [['']];
  for (let i=0; i<s.length; i++) {
    let addWord = false;
    for (let o=0; o<options.length; o++) {
      let sentence = options[o];
      let last = sentence.length-1;
      sentence[last] = sentence[last]+s[i];
      if (wordDict.includes(sentence[last])) addWord = true;
    }
    if (addWord) options.push(['']);
  }
  
  for (let opt=0; opt<options.length; opt++) {
    let sentence = options[opt];
    if (sentence[sentence.length-1] === '') return true;
  }

  return false;
};




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
