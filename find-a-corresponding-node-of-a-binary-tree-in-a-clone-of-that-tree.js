/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

const getTargetCopy = (original, cloned, target) => {
    let ans;
    
    const dfs = (node) => {
        if (!node) return;
        if (node.val === target.val) {
            if (checkNode(node, target)) ans = node;
        }
        dfs(node.left);
        dfs(node.right);
    }
    
    const checkNode = (node, target) => {
        if (!node && !target) return true;
        if (node.val === target.val) {
            return checkNode(node.left, target.left) && checkNode(node.right, target.right);
        }
        return false;
    }
    
    dfs(cloned);
    return ans;
};
