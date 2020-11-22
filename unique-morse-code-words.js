/**
 * @param {string[]} words
 * @return {number}
 */
// Attempt 2
const uniqueMorseRepresentations = (words) => {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let map = {};
    for (let i=0; i<words.length; i++) {
        let word = words[i];
        let str = '';
        for (let j=0; j<word.length; j++) {
            str += morse[word.charCodeAt(j)-97];
        }
        map[str] = map[str]+1 || 1;
    }    
    return Object.keys(map).length;
};

// Attempt 1
const uniqueMorseRepresentations = (words) => {
  const dict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const trans = words.map(word => {
    return word.split('').map(letter => { return dict[letter.charCodeAt(0)-97]; }).join('');
  });
  
  return [...new Set(trans)].length;
};
