/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// O(n)
// S(1)
const lowestCommonAncestor = (root, p, q) => {
  let pNode = root;
  let qNode = root;
  p = p.val;
  q = q.val;
  while (pNode.val !== p && qNode.val !== q) {
    if (pNode.val < p && qNode.val < q) {
      pNode = pNode.right;
      qNode = qNode.right;
      root = root.right;
    } else if (pNode.val > p && qNode.val > q) {
      pNode = pNode.left;
      qNode = qNode.left;
      root = root.left;
    } else {
      return root;
    }
  }
  
  return root;
};
