/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

// O(n+w)
// S(n+w)

const mostCommonWord = (paragraph, banned) => {
	paragraph = paragraph.replace(/[^a-zA-Z]/g,'');     
	paragraph.toLowerCase();
  paragraph = paragraph.split(' ');	

  let banDict = {};
  for (let b=0; b<banned.length; b++) {
    let w = banned[b];
    banDict[w] = banDict[w] ? banDict[w]+1 : 1;
  }

  let max = 0;
  let maxWord = '';
  let pDict = {};
  for (let p=0; p<paragraph.length; p++) {
    let w = paragraph[p];
    if (!banDict[w]) {
      pDict[w] = pDict[w] ? pDict[w]+1 : 1;
      if (pDict[w] > max) {
        max = pDict[w];
        maxWord = w;
      }
    }
  }

  return maxWord;
};
