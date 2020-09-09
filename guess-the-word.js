/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */

const trimList = (guess, word, matches) => {
  let count=0;
  for (let i=0; i<guess.length; i++) {
    if (guess[i] === word[i]) count++;
  }
  
  if (matches === 0) {
    return count > 0 ? false : true;
  } else {
    return count >= matches ? true : false;
  }
}

const findSecretWord = (wordlist, master) => {
  let matches=0;
  let guesses=0;
  
  while (guesses < 10) {
    let dict={};
    for (let i=0; i<wordlist.length; i++) {
      for (let j=0; j<wordlist[i].length; j++) {
        dict[wordlist[i][j]] = dict[wordlist[i][j]] ? dict[wordlist[i][j]]+1 : 1;
      }
    }
  
    let maxLetter='';
    let max=0;
    for (let letter in dict) {
      if (dict[letter] > max) {
        maxLetter = letter;
        max = dict[letter];
      }
    }

    let guess = '';
    for (let i=0; i<wordlist.length; i++) {
      if (wordlist[i].includes(maxLetter)) {
        guess=wordlist[i];
        break;
      }
    }

    matches=master.guess(guess);
    wordlist = wordlist.filter(x => { return guess != x });
    wordlist = wordlist.filter(x => { return trimList(guess, x, matches)});
    guesses++;
  }
};
