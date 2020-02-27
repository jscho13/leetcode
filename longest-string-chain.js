/**
 * @param {string[]} words
 * @return {number}
 */

// in coin change it's O(n*amount) and S(amount) for dp array)
// so I guess here it'd be O(n*m) where m is the longest word length
// and S(n) for all the words

// Valid DP solution
// O(nlogn + n*m)
// S(n)
const longestStrChain = (words) => {
  words.sort((a,b) => { return a.length-b.length });
  let dp={}, max=0;
  for (let w=0; w<words.length; w++) {
    let word = words[w];
    dp[word] = 1;
    for (let i=1; i<=word.length; i++) {
      let mod = word.slice(0, i-1)+word.slice(i);
      if (dp[mod]) {
        dp[word] = dp[mod]+1;
        if (dp[word] > max) {
          max = dp[word];
        }
      }
    }
  }
  return max || 1;
}

// some notes... line 19-21 can be cut down to Math.max
// line 18 can be cut down to dp[word] = (dp[word] || 0)+1 and deleting 14
// form(word in words) gets rid of the integer tracking and is cleaner

console.log(longestStrChain(['a','b','ba','bca','bda','bdca']));
console.log(longestStrChain(["ksqvsyq","ks","kss","czvh","zczpzvdhx","zczpzvh","zczpzvhx","zcpzvh","zczvh","gr","grukmj","ksqvsq","gruj","kssq","ksqsq","grukkmj","grukj","zczpzfvdhx","gru"]));


// This is valid BT solution
// O(nlogn + n*m)
// S(n)
// const longestStrChain = (words) => {
//   let hash = {};
//   for (let i=0; i<words.length; i++) hash[words[i]] = true;
//   words.sort((a,b) => { return a.length - b.length });
//   let counter=1;
//   let max=1;
// 
//   const bt = (word) => {
//     for (let idx=0; idx<word.length; idx++) {
//       let ch = word[idx];
//       word = word.slice(0, idx)+word.slice(idx+1, word.length);
//       if (hash[word]) {
//         counter++;
//         max = Math.max(max, counter);
//         bt(word);
//         counter--;
//       }
//       word = word.slice(0, idx)+ch+word.slice(idx, word.length);
//     }
//   }
//   
//   for (let w=words.length-1; w>=0; w--) bt(words[w]);
//   return max;
// };

