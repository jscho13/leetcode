/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const sortedArrayToBST = (nums) => {

  const dfs = (ary) => {
    if (ary.length === 0) return null;
    let mid = Math.floor(ary.length/2);
    let node = new TreeNode(ary[mid]);

    node.left = dfs(ary.slice(0, mid));
    node.right = dfs(ary.slice(mid+1, ary.length));

    return node;
  }

  let root = dfs(nums);
  return root;
};
