/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// O(n*klogk)
// S(n)
const groupAnagrams = (strs) => {
  let dict = {};
  for (let i=0; i<strs.length; i++) {
    let sorted = strs[i].split('').sort().join('');
    if (dict[sorted]) {
      dict[sorted].push(strs[i]);
    } else {
      dict[sorted] = [strs[i]];
    }
  }
  
  return Object.values(dict);
};
