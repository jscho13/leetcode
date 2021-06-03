/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */

// Attempt 2
// no bueno... this might be close though
const delNodes = (root, to_delete) => {
  let ans = [];

  const dfs = (node) => {
    if (node === null) return false;

    let del = to_delete.includes(node.val);
    if (del && node.left) ans.push(node.left);
    if (del && node.right) ans.push(node.right);

    let l = dfs(node.left);
    let r = dfs(node.right);
    if (l) node.left = null;
    if (r) node.right = null;
    return del;
  }

  let r = dfs(root);
  if (!r) ans.push(root);
  return ans;
};


// Given the root of a binary tree, each node in the tree has a distinct value.
// After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).
// Return the roots of the trees in the remaining forest.  You may return the result in any order.
// 
// Example 1:
// Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
// Output: [[1,2,null,4],[6],[7]]

// bfs would be weird here
// how would you set it to null and then look at children?
// you can't just set the node you're looking at to null, the parent needs to point to null

// dfs might work better
// traverse down children, then delete
