var isSubtree = function(s, t) {
  if (s === null && t === null) return true;
  if (s === null || t === null) return false;

  var queue = [s];
  while (queue.length > 0) {
    var node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    if (node.val === t.val) {
      if (compareTree(node, t)) return true;
    }
  }
  
  return false;
};

function compareTree(n, t) {
  if (n === null && t === null) return true;
  if (n === null || t === null) return false;

  var left, right;
  if (n.val === t.val) {
    left = compareTree(n.left, t.left);
    right = compareTree(n.right, t.right);
  }
  
  return left && right;
}

