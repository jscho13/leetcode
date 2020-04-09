/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
// O(n+m)
// S(1)
const isLongPressedName = (name, typed) => {
  let [w1,w2]=[0,0];
  name=name.split('');
  typed=typed.split('');
  
  while (w1<name.length || w2<typed.length) {
    if (name[w1] === typed[w2]) {
      w1++;
      w2++;
    } else {
      if (typed[w2]===typed[w2-1]) {
        typed.splice(w2,1);
      } else {
        return false;
      }
    }
  }
  
  return true;
};
