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
// THIS IS INCORRECT
// This is a S(1) attempt. But it's O(n^2)
// S(n) solution would be pushing values to a string. then check if string is a palindrome.
const isPalindrome = (head) => {
  if (!head || !head.next) return true;
  let length=0;
  let node=head;
  while (node.next) {
    node=node.next;
    length++;
  }

  node = head;
  while (length>0) {
    let compare=node;
    let times=length;
    while (times > 0) {
      compare=compare.next;
      times--;
    }
    if (compare.val != node.val) return false;
    length -= 2;
    node=node.next;
  }
       
  return true;
};
