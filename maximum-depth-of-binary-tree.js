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
var maxDepth = function(root) {
  var ans = 0;
  if (root === null) return ans;
  // ans = depthHelper(root, ans);
  // ans = depthHelper2(root);
  return ans;
};

// Solve alone
var depthHelper = function(node, depth) {
  var max1 = 0;
  var max2 = 0;
  
  if (node.left) {
    max1 = depthHelper(node.left, depth) + 1;
  }
  
  if (node.right) {
    max2 = depthHelper(node.right, depth) + 1;
  }
 
  var max = (max1 > max2) ? max1 : max2;
  max = (max === 0) ? 1 : max;
  return max;
}

// Solved with online tips
var depthHelper2 = function(node) {
}
