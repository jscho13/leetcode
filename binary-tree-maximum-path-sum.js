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
const maxPathSum = (root) => {
  let max = Number.NEGATIVE_INFINITY;
  
  const dfs = (n) => {
    if (n===null) return 0;
    let l = dfs(n.left);
    let r = dfs(n.right);
    let sum = n.val + l + r;
    let suml = n.val + l;
    let sumr = n.val + r
    max = Math.max(max, sum, suml, sumr, n.val);
    return Math.max(suml, sumr, n.val);
  }

  dfs(root);
  return max;
};
