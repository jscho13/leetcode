/**
 * @param {string} S
 * @return {string}
 */

const removeOuterParentheses = (S) => {
  let stack = [];
  let ans = '';
  for (let i of S) {
    (i === '(') ? stack.push(i) : stack.pop();
    if (stack.length > 1 && i === '('
     || stack.length > 0 && i === ')') {
      ans = ans + i;
    }
  }
  
  return ans;
};
