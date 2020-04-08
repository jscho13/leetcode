/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// O(n*(n*m))
// S(n)
const ladderLength = (beginWord, endWord, wordList) => {
  let queue=[beginWord];
  let count=0;
  let unmatched = true;
  while (queue.length && unmatched) {
    let level=queue.length;
    
    while (level) {
      let word = queue.shift();
      if (word === endWord) return count+1;
      level--;
      for (let i=0; i<wordList.length; i++) {
        let diff=0;
        for (let j=0; j<word.length; j++) if (word[j] !== wordList[i][j]) diff++;
        if (diff === 1) {
          queue.push(wordList.splice(i,1)[0]);
          i--;
        }
      }
    }
    
    count++;
  }
  
  return 0;
};
