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
const minDepth = (root) => {
  // initialize
  if (root === null) return 0;
  let depth=0;
  let q=[root];

  // go through queue
  while (q.length) {
    let nodes = q.length;
    depth++;

    // add all children at level
    while (nodes>0) {
      let node = q.shift();
      nodes--;
      if (node) {
        if (node.left === null && node.right === null) return depth;
        q.push(node.left);
        q.push(node.right);
      }
    }
  }

  return depth;
};
