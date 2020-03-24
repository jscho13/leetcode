/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle = (head) => {
  if (head === null) return false;
  
  let n = head;
  let fast = head.next;
  while (fast && fast.next) {
    n = n.next;
    fast = fast.next.next;
    if (n === fast) return true;
  }
  
  return false;
};
