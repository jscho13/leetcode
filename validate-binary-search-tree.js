/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
  if (root === null) return true;
  var q = [root];

  while (q.length != 0) {
    n = q.shift();
    if (n.left) {
      if (Math.max(...check_children(n.left)) >= n.val) return false;
      q.push(n.left);
    }

    if (n.right) {
      if (Math.min(...check_children(n.right)) <= n.val) return false;
      q.push(n.right);
    }
  }

  return true;
};

function check_children(n) {
  var list = [n.val];
  if (n.left) {
    list = list.concat(check_children(n.left));
  }

  if (n.right) {
    list = list.concat(check_children(n.right));
  }

  return list;
}
