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
 * @return {TreeNode}
 */
// Attempt 1
// O(n)
// S(n)
const subtreeWithAllDeepest = (root) => {
    const calcDeepest = (left, right, node, depth) => {
        if (!left && !right) return [node, depth];
        if (!left) return right;
        if (!right) return left;
        
        let maxDepth = Math.max(left[1], right[1]);
        if (left[1] === right[1]) {
            return [node, left[1]];
        } else if (maxDepth === left[1]) {
            return left;
        } else {
            return right;
        }
    }

    const dfs = (node, depth) => {
        if (!node) return;
        let l = dfs(node.left, depth+1);
        let r = dfs(node.right, depth+1);
        let dNode = calcDeepest(l, r, node, depth);
        
        return dNode;
    }
    
    let calculate = dfs(root, 0);
    return calculate[0];
};
