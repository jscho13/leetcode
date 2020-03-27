/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// O(n)
// S(n)
const serialize = (root) => {
  if (root === null) return '';
  
  let data = [];
  let q = [root];
  while (q.length) {
    let n = q.shift();
    if (n != null) {
      data.push(n.val);
      q.push(n.left);
      q.push(n.right);
    } else {
      data.push('null');
    }
  }
  return data.join(',');
};

const deserialize = (data) => {
  if (data === '') return null;
  
  data = data.split(',');
  let root = new TreeNode(data.shift());
  let q = [root];

  while (q.length) {
    let n = q.shift();
    let val = data.shift();
    if (val !== 'null') {
      let left = new TreeNode(parseInt(val));
      n.left = left;
      q.push(left);
    }

    val = data.shift();
    if (val !== 'null') {
      let right = new TreeNode(parseInt(val));
      n.right = right;
      q.push(right);
    }
  }
  return root;
};












var serialize = function(root) {
  var list = [];
  var q = [root];
  while (q.length) {
    var n = q.shift();
    if (n) {
      list.push(n.val);
      q.push(n.left);
      q.push(n.right);
    } else {
      list.push('null');
    }
  }
  return list.join(',');
};

var deserialize = function(data) {
  if (data === '' || data === 'null') return null;
  var data = data.split(',').map(function(a) { return (a === 'null') ? null : a; });
  var root = new TreeNode(data.shift());
  var q = [root];
  while (data.length) {
    var n = q.shift();
    var left = data.shift();
    var right = data.shift();
    if (left !== null) {
      left = new TreeNode(left);
      q.push(left);
    }
    n.left = left;
    
    if (right !== null) {
      right = new TreeNode(right);
      q.push(right);
    }
    n.right = right;
  }
  
  return root;
};
