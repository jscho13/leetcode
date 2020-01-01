class BinaryTreeNode {
  constructor(val) {
    this.val = val;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}


// O(n)
// S(h) -> h is height of the tree

function isBinarySearchTree(treeRoot) {
  let n = treeRoot;

  function dfs(n, rootVal, dir, max, min) {
    if (n === null) return true;
    if (dir === 'l') {
      if (n.val <= min || n.val >= rootVal ) return false;
      max = rootVal;
    } else {
      if (n.val >= max || n.val <= rootVal ) return false;
      min = rootVal;
    }

    return dfs(n.left, n.val, 'l', max, min) && dfs(n.right, n.val, 'r', max, min);
  }

  return dfs(n.left, n.val, 'l', Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY) && dfs(n.right, n.val, 'r', Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
}









// Tests

let desc = 'valid full tree';
let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = 'both subtrees valid';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(60);
rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
rightNode.insertRight(90);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = 'descending linked list';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(40);
leftNode = leftNode.insertLeft(30);
leftNode = leftNode.insertLeft(20);
leftNode = leftNode.insertLeft(10);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = 'out of order linked list';
treeRoot = new BinaryTreeNode(50);
rightNode = treeRoot.insertRight(70);
rightNode = rightNode.insertRight(60);
rightNode = rightNode.insertRight(80);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = 'one node tree';
treeRoot = new BinaryTreeNode(50);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}


// Old solution
// function isBinarySearchTree(treeRoot) {
//   let left, right;
//   let n = treeRoot;
//   if (n === null) return true;
//   if (checkAll(n.left, n.val, 'l') === false) return false;
//   if (checkAll(n.right, n.val, 'r') === false) return false;
// 
//   return isBinarySearchTree(n.left) && isBinarySearchTree(n.right);
// }
// 
// function checkAll(root, val, dir) {
//   let n = root;
//   if (n === null) return true;
//   if (n.val > val && dir === 'l') return false;
//   if (n.val < val && dir === 'r') return false;
// 
//   return checkAll(n.left, val, dir) && checkAll(n.right, val, dir);
// }

