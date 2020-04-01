/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// O(n)
// S(n)
const kthSmallest = (root, k) => {
  let ans = [];
  const dfs = (node) => {
    if (node === null) return;

    dfs(node.left);
    ans.push(node.val);
    dfs(node.right);
  }
  
  dfs(root);
  return ans[k-1];
};
