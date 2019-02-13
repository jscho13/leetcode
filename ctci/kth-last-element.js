/**
 * @param {Node[]} nums
 * @param {number} k
 * @return {number}
 */

function Node(value) {
  this.val = value;
  this.next = null;
}

function findKthLastElement(nums, k) {
  if (nums.typeOf !== 'Node') return [];
  var count = 1;
  var ans = nums;
  while (nums.next != null) {
    nums = nums.next;
    count < k ? count += 1 : ans = ans.next;
  }
  return ans.val;
}

var n1 = new Node(1);
var n2 = new Node(2);
var n3 = new Node(3);
var n4 = new Node(4);
var n5 = new Node(5);
var n6 = new Node(6);

n5.next = n6;
n4.next = n5;
n3.next = n4;
n2.next = n3;

console.log(findKthLastElement('hi', 1));
