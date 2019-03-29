
// Time-complexity: O(n*logn)
// Space-complexity: O(1)

var longestUnivaluePath = function(root) {
  if (!root || root.length === 0) return 0;
  var l = dfs(root.left, root.val);
  var r = dfs(root.right, root.val);
  // returning the max of three different items was the key here
  // you were doing just left and right instead of recursively calling this method on both
  // probably is possible with BFS like you thought earlier if you went through with it
  return Math.max(longestUnivaluePath(root.left), longestUnivaluePath(root.right), l+r);
}

var dfs = function(node, val) {
  if (node === null) return 0;
  var l=0;
  var r=0;
  if (node.val === val) {
    l = dfs(node.left, node.val)+1;
    r = dfs(node.right, node.val)+1;
  }

  return Math.max(l, r);
}
