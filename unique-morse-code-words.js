/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = (words) => {
  const dict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const trans = words.map(word => {
    return word.split('').map(letter => { return dict[letter.charCodeAt(0)-97]; }).join('');
  });
  
  return [...new Set(trans)].length;
};


// A very sexy solution:
// var uniqueMorseRepresentations = (words) => {
//   const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
//     
//   const mapper = char => morse[char.charCodeAt(0) - 'a'.charCodeAt(0)];
//   
//   return words.map((word)=>{return word.split('').map(mapper).join('')})
//     .reduce((set, cur)=>set.add(cur), new Set()).size  
//   
// }
