// Attempt: 2

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) return 0;
  
  var s = "(";
  var res = [];
  dfs(s, 1, 0, n, res);
  return res;
};

var dfs = function(s, open, close, n, res) {
  if (s.length < n*2) {
    var sClone;
    
    // close tree
    if (open >= close+1) {
      sClone = s+')';
      dfs(sClone, open, close+1, n, res)
    }
    
    // open tree
    if (open < n) {
      sClone = s+'(';
      dfs(sClone, open+1, close, n, res);
    }
  } else {
    res.push(s);
  }
}
