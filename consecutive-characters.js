/**
 * @param {string} s
 * @return {number}
 */
const maxPower = (s) => {
    let max = 0;
    let count = 0;
    let ch;
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === ch) {
            count++;
        } else {
            ch = s[i];
            count = 1;
        }
        max = Math.max(max, count);
    }
    return max;
};
