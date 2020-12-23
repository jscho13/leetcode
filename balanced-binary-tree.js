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
 * @return {boolean}
 */
// O(n)
// Callstack is S(logn)
const isBalanced = (root) => {
    let ans = true;

    const dfs = (node) => {
        if (!node) return 0;
        let left = dfs(node.left);
        let right = dfs(node.right);
        if (Math.abs(left-right)>1) ans = false;
        return Math.max(left, right)+1;
    }
    
    dfs(root);
    return ans;
};
