/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// O(n)
// S(n)
const maxAncestorDiff = (root) => {
    let ans = 0;
    
    const dfs = (node, max, min) => {
        if (!node) return;
        max = Math.max(node.val, max);
        min = Math.min(node.val, min);
        ans = Math.max(max-min, ans);
        dfs(node.left, max, min);
        dfs(node.right, max, min);
    }
    
    dfs(root, root.val, root.val);
    return ans;
};
