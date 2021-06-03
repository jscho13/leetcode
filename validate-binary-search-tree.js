/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// O(n)
// S(logn) -> this is just S(n)
const isValidBST = (root) => {
  const dfs = (node, max, min) => {
    if (node === null) return true;
    if (node.val >= max || node.val <= min) return false;

    let left = dfs(node.left, Math.min(max, node.val), min);
    let right = dfs(node.right, max, Math.max(min, node.val));
    return left && right;
  }
  
  return dfs(root, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
};


// 1 - postorder traversal
// 2 - dfs with limits - recursive -> mastered
// 3 - dfs with limits - iterative
