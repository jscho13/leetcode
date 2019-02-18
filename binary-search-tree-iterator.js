/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
function BSTIterator(root) {
  this.root = root;
  this.valList = [];
  this.currentIdx = -1;

  // DFS recursion
  this.createValList = function(node) {
    if (node.left && node.right) {
      this.createValList(node.left);
      this.valList.push(node.val);
      this.createValList(node.right);
    } else if (node.left) {
      this.createValList(node.left);
      this.valList.push(node.val);
    } else if (node.right) {
      this.valList.push(node.val);
      this.createValList(node.right);
    } else {
      this.valList.push(node.val);
    }
  }

  if (root !== null) this.createValList(root);

  this.currVal = function() {
    return this.valList[this.currentIdx];
  }

  this.nextVal = function() {
    return this.valList[this.currentIdx+1];
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  this.currentIdx = this.currentIdx+1;
  return this.currVal();
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return (this.nextVal() !== undefined);
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = Object.create(BSTIterator).createNew(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
