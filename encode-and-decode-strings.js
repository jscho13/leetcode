/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
const encode = (strs) => {
    let res = strs.join('JOINUNIT1');
    return res;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
const decode = (s) => {
    let res = s.split('JOINUNIT1'); 
    return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
