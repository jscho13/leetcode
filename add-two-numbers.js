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
