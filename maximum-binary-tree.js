var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) return null;
  var max = Math.max(...nums);
  var idx = nums.indexOf(max);
  
  var root = new TreeNode(max);
  root.left = constructTree(nums.slice(0, idx));
  root.right = constructTree(nums.slice(idx+1));
  
  return root;
};

function constructTree(ary) {
  var node;
  if (ary.length === 0) {
    return null;
  } else {
    var max = Math.max(...ary);
    var idx = ary.indexOf(max);
    
    node = new TreeNode(max);
    node.left = constructTree(ary.slice(0, idx));
    node.right = constructTree(ary.slice(idx+1));
  }
  
  return node;
}
