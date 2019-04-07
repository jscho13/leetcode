
var serialize = function(root) {
  var list = [];
  var q = [root];
  while (q.length) {
    var n = q.shift();
    if (n) {
      list.push(n.val);
      q.push(n.left);
      q.push(n.right);
    } else {
      list.push('null');
    }
  }
  return list.join(',');
};

var deserialize = function(data) {
  if (data === '' || data === 'null') return null;
  var data = data.split(',').map(function(a) { return (a === 'null') ? null : a; });
  var root = new TreeNode(data.shift());
  var q = [root];
  while (data.length) {
    var n = q.shift();
    var left = data.shift();
    var right = data.shift();
    if (left !== null) {
      left = new TreeNode(left);
      q.push(left);
    }
    n.left = left;
    
    if (right !== null) {
      right = new TreeNode(right);
      q.push(right);
    }
    n.right = right;
  }
  
  return root;
};
