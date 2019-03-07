/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  var q = [root];
  var val = root.val;
  while (q.length > 0) {
    var n = q.shift();
    if (n.left !== null) {
      if (n.left.val !== val) return false;
      q.push(n.left);
    }
    
    if (n.right !== null) {
      if (n.right.val !== val) return false;
      q.push(n.right);
    }
  }
  
  return true;
};
