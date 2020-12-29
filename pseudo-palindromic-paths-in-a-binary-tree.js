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
const pseudoPalindromicPaths  = (root) => {
    let ans = 0;
    
    // dfs and pass path
    const dfs = (node, track) => {
        if (!node) return;

        // at leaf node calc if palindrome
        if (!node.left && !node.right) {
            let ary = track.concat(node.val);
            let set = {};
            let odd = 0;
            for (let i=0; i<ary.length; i++) {
                let num = ary[i];
                set[num] = set[num]+1 || 1;
            }
            for (let key in set) if (set[key]%2 === 1) odd++;
            // can be palindrome if one odd, and rest are even
            if (odd === 1 || odd === 0) ans++;
        }

        dfs(node.left, track.concat(node.val));
        dfs(node.right, track.concat(node.val));
    }

    dfs(root, []);
    return ans;
};
