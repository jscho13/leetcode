/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (t1 === []) return t2;
  if (t2 === []) return t1;

  var ans = mergeNodes(t1, t2);
  return ans;
};

var mergeNodes = function(n1, n2) {
  var merged = new TreeNode();
  if (n1 === null && n2 === null) {
    return null;
  }
  
  if (n1 && n2) {
    merged.val = n1.val + n2.val;
    merged.left = mergeNodes(n1.left, n2.left);
    merged.right = mergeNodes(n1.right, n2.right);
  } else if (n2 === null) {
    merged = n1;
  } else {
    merged = n2;
  }
  
  return merged;
}
