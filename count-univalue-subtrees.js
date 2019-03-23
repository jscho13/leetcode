/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
  if (root === null) return 0;
  var stack = [root];
  var ans = 0;
  while (stack.length > 0) {
    var n = stack.shift();
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
    if (isUni(n, n.val)) ans++;
  }
  return ans;
};

var isUni = function(node, val) {
  if (!node) return true;
  if (node.val !== val) return false;
  return (isUni(node.left, val) && isUni(node.right, val));
}
