/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) return false;
  return sumHelper(root, 0, sum).includes(sum);
};

var sumHelper = function(node, acc) {
  var ans = [];
  acc += node.val;
  if (node.left) ans = ans.concat(sumHelper(node.left, acc));
  if (node.right) ans = ans.concat(sumHelper(node.right, acc));
  if (node.left === null && node.right === null) ans = [acc];
  return ans;
}
