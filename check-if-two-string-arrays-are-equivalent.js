/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
// O(n+m)
// S(n+m)
const arrayStringsAreEqual = (word1, word2) => {
    let w1='';
    let w2='';
    
    while (word1.length) {
        let w = word1.shift();
        w1 += w;
    }
    
    while (word2.length) {
        let w = word2.shift();
        w2 += w;
    }

    return w1 === w2;
};
