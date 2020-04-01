/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// O(n)
// S(n)
const levelOrder = (root) => {
  let q = [root];
  let ans = [];
  while (q.length) {
    let level=q.length;
    let nodes = [];
    
    while (level) {
      let node = q.shift();
      level--;
      if (node) {
        nodes.push(node.val);
        q.push(node.left);
        q.push(node.right);
      }
    }
    if (nodes.length) ans.push(nodes.slice(0));
  }
  return ans;
};
