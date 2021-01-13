/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// O(n+m)
// S(1)
// Attempt 2: perfect!
const addTwoNumbers = (l1, l2) => {
    let ans = new ListNode();
    let node = ans;
    let carry = false;

    while (l1 || l2) {
        let n = carry ? 1 : 0;
        carry = false;

        if (l1) n += l1.val;
        if (l2) n += l2.val;
        if (n>9) {
            n-=10;
            carry = true;
        }

        node.next = new ListNode(n);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        node = node.next;
    }
    
    if (carry) node.next = new ListNode(1);
    return ans.next;
};



// Attempt 1
var addTwoNumbers = function(l1, l2) {
  var root, node, num, carry;
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  
  while (l1 !== null && l2 !== null) {
    if (root === undefined) {
      [num, carry] = addValue(l1.val + l2.val, carry);
      root = new ListNode(num);
      node = root;
      l1 = l1.next;
      l2 = l2.next;
    } else {
      [num, carry] = addValue(l1.val + l2.val, carry);
      node.next = new ListNode(num);
      node = node.next;
      l1 = l1.next;
      l2 = l2.next;
    }
  }
  
  while (l1 !== null) {
    [num, carry] = addValue(l1.val, carry);
    node.next = new ListNode(num);
    node = node.next;
    l1 = l1.next;
  }
  
  while (l2 !== null) {
    [num, carry] = addValue(l2.val, carry);
    node.next = new ListNode(num);
    node = node.next;
    l2 = l2.next;
  }
  
  if (carry) node.next = new ListNode(1);
  return root;
};
  
function addValue(num, carry) {
  if (carry) {
    num++;
    carry = false;
  }

  if (num > 9) {
    carry = true;
    num = num%10;
  }

  return [num, carry];
}
