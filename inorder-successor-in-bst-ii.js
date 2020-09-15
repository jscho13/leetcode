/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const inorderSuccessor = (node) => {
  if (node.right) {
    // 1) rights most left element
    let n = node.right;
    while (n.left) {
      n = n.left;
    }
    return n;
  }

  // 2) if no right... first parent thats greater
  let n = node;
  while (n.parent) {
    let temp = n.parent;
    // 3) were we in left or right tree?
    if (n === temp.left) {
      return temp;
    } else {
      n = temp;
    }
  }

  return null;
};
