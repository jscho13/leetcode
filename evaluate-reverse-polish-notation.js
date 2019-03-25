/**
 * @param {string[]} tokens
 * @return {number}
 */

// Time-complexity = O(n)
// Space-complexity = O(n)

var evalRPN = function(tokens) {
  var operators = ['+', '-', '*', '/'];
  var stack = [];
  for (var i=0; i<tokens.length; i++) {
    // add numbers to stack until first non-number
    if (operators.includes(tokens[i])) {
      var b = parseInt(stack.pop());
      var a = parseInt(stack.pop());
      // reduce using operation and add new element to stack
      if (tokens[i] === '+') stack.push(a+b);
      if (tokens[i] === '-') stack.push(a-b);
      if (tokens[i] === '/') stack.push(Math.trunc(a*(1/b)));
      if (tokens[i] === '*') stack.push(a*b);
    } else {
      // add elements to stack until next operation
      stack.push(tokens[i]);
    }
  }
  return stack[0];
};
