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
// Recursive 
const maxDepth = (root) => {
  const helper = (node) => {
    if (node === null) return 0;
    
    let left, right;
    if (node) {
      left = helper(node.left);
      right = helper(node.right);
    }
    return Math.max(left, right)+1;
  }

  return helper(root);
};

  

// Iterative
const maxDepth = (root) => {
  if (root === null) return 0;
  let q = [root];
  let depth=0;
  while (q.length) {
    let level = q.length;
    depth++;    

    while (level > 0) {
      let node=q.shift();
      level--;
      if (node) {
        q.push(node.left);
        q.push(node.right);
      }
    }
  }
  
  return depth-1;
};

