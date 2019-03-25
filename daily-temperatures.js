/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  var stack = [0];
  var ans = new Array(T.length);
  for (var i=1; i<T.length; i++) {
    while (T[i] > T[stack[stack.length-1]]) {
      var idx = stack.pop();
      ans[idx] = i-idx;
    }
    stack.push(i);
  }
  
  for (var l=0; l<stack.length; l++) {
    ans[stack[l]] = 0;
  }
  return ans;
};
