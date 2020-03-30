/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// O(n)
// S(h)
const invertTree = (root) => {
  const dfs = (node) => {
    if (node === null) return;
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return root;
};
