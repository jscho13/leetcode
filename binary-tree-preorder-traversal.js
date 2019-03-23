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
var preorderTraversal = function(root) {
  var ans = [];
  ans = preorderPush(root, ans);
  return ans;
};

var preorderPush = function(node, array) {
  if (node) {
    array.push(node.val)
    if (node.left) array = preorderPush(node.left, array);
    if (node.right) array = preorderPush(node.right, array);
  }

  return array;
}
