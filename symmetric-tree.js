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
var isSymmetric = function(root) {
  if (root) return true;
  var leftArray = leftSymmetry(root.left);
  var rightArray = rightSymmetry([root.right], []);
  for (var i=0; i<leftArray.length; i++) {
    if (leftArray[i] !== rightArray[i]) return false;
  }
  return true;
};

// Iterative solution
var leftSymmetry = function(node) {
  var stack = [node];
  var ans = [];
  while (stack.length > 0) {
    var node = stack.shift();
    if (node === null) {
      ans.push(null);
    } else {
      ans.push(node.val);
      stack.push(node.left);
      stack.push(node.right);
    }
  }
  return ans;
}

// Recursive solution
var rightSymmetry = function(stack, ary) {
  var newStack = [];
  while (stack.length > 0) {
    var node = stack.shift();
    if (node === null) {
      ary.push(null);
    } else {
      ary.push(node.val);
      newStack.push(node.right);
      newStack.push(node.left);
    }
  }
  ary = (newStack.length > 0) ? rightSymmetry(newStack, ary) : ary;
  return ary;
}

// Time-complexity: O(n)
// Space-complexity: O(n)
