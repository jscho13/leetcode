/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// Visit: 1
// Time: 30 min

// var wordBreak = function(s, wordDict) {
//   // iterate through through wordDict
//   str = s.split('');
//   for (var w=0; w<wordDict.length; w++) {
//     var word = wordDict[w].split('');
//     for (var c=0; c<str.length; c++) {
//       // start looping if first letter matches
//       if (str[c] === word[0]) {
//         var valid = true;
//         for (var wc=c; wc<word.length+c; wc++) {
//           if (str[wc] != word[wc-c]) {
//             valid = false;
//             break;
//           }
//         }
// 
//         // cut out a word if it matches 
//         if (valid) {
//           str.splice(c, word.length)
//           c = c-word.length;;
//         }
//       }
//     }
//     console.log(str);
//     if (str.length === 0) return true;
//   }
//   return false;
// };


console.log(wordBreak('leetcode', ["leet", "code"]));
// console.log(wordBreak('applepenapple', ["apple", "pen"]));
// console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
// console.log(wordBreak('cars', ["car", "ca", "rs"]));
