/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  let dict = {};
  for (let i=0; i<s.length; i++) dict[s[i]] = dict[s[i]] ? dict[s[i]]+1 : 1;
  for (let j=0; j<t.length; j++) dict[t[j]]--;
  for (let key in dict) {
    if (dict[key] !== 0) return false;
  }
  return true;
};
