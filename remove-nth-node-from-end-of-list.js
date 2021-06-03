/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  let fwrd = head;
  let back = head;
  
  while (n>0) {
    fwrd = fwrd.next;
    n--;
  }
  
  while (fwrd && fwrd.next) {
    fwrd = fwrd.next;
    back = back.next;
  }
  
  back.next = back.next.next;
  return head;
};
