/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// O(n)
// S(logn)
const buildTree = (preorder, inorder) => {
  if (preorder.length === 0) return null;
  let root = new TreeNode(preorder[0]);
  let pos = inorder.indexOf(root.val);
  
  let left = inorder.slice(0, pos);
  let right = inorder.slice(pos+1, inorder.length);
  let pleft = preorder.slice(1, left.length+1);
  let pright = preorder.slice(left.length+1, preorder.length);
  
  root.left = buildTree(pleft, left);
  root.right = buildTree(pright, right);
  
  return root;
};
