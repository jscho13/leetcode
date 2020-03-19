/**
 * @param {string[]} logs
 * @return {string[]}
 */

// O(nlogn+m) -> we need to go through list + length of each entry
// S(n)

const reorderLogFiles = (logs) => {
  let wordAry = [];
  
  for (let i=0; i<logs.length; i++) {
    let words = logs[i].split(' ');
    
    // match is if you want to do some regexp stuff
    // test is more performant since it's just a boolean check
    if (/^[A-Za-z]+$/.test(words[1])) {
      words.push(words.shift());
      let joinedWord = words.join(' ');
      wordAry.push(joinedWord);
      logs.splice(i,1);
      i--;
    };
  }
  
  wordAry = wordAry.sort();
  
  for (let j=0; j<wordAry.length; j++) {
    let words = wordAry[j].split(' ');
    words.unshift(words.pop());
    wordAry[j] = words.join(' ');
  }
  
  return wordAry.concat(logs);
};
