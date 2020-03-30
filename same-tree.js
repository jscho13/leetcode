/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// O(n)
// S(logn)
const isSameTree = (p, q) => {
  const dfs = (node) => {
    if (node === null) return 'null';
    return node.val + dfs(node.left) + dfs(node.right);
  }
  
  return dfs(p) === dfs(q);
};
