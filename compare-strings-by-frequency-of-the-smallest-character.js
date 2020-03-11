/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */

const numSmallerByFrequency = (queries, words) => {
  const lowestFreq = (word) => {
    let lowest = 'z';
    let count = 0;
    for (let i=0; i<word.length; i++) if (word[i]<lowest) lowest = word[i];
    for (let j=0; j<word.length; j++) if (word[j]===lowest) count++;
    return count;
  }

  queries = queries.map((w) => { return lowestFreq(w) });
  words = words.map((w) => { return lowestFreq(w) });

  let ans = queries.map((q) => {
    let count=0;
    for (let j=0; j<words.length; j++) {
      if (q < words[j]) count++;
    }
    return count;
  });
  return ans;
};
