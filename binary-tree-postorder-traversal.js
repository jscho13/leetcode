/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (root === null) return [];
  var ans = [];
  ans = postorderHelper(root, ans);
  return ans;
};

var postorderHelper = function(node, array) {
  if (node.left) array = postorderHelper(node.left, array);
  if (node.right) array = postorderHelper(node.right, array);
  array.push(node.val);
  return array;
}
