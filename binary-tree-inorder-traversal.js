/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// O(n)
// S(n)
// Iterative traversal
const inorderTraversal = (root) => {
  let q=[root];
  let ans=[];
  let dict = new Set();
  while (q.length) {
    let n = q.shift();
    if (n) {
      if (dict.has(n)) {
        ans.push(n.val);
      } else {
        q.unshift(n.right);
        q.unshift(n);
        q.unshift(n.left);
        dict.add(n);
      }
    }
  }
  
  return ans;
};
