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
var inorderTraversal = function(root) {
  var ans = [];
  ans = inorderTraversalHelper(root, ans);

  return ans;
};

var inorderTraversalHelper = function(node, array) {
  // if there is a left child always go down that path
  if (node.left) {
    array = inorderTraversalHelper(node.left, array);
  }
  
  // return the current (middle) node
  array.push(node.val);

  // if theres a right, go down that path after the left
  if (node.right) {
    array = inorderTraversalHelper(node.right, array);
  }

  return array;
}
