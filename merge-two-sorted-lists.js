/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Attempts: 3
// this one was harder than it should have been.
// O(n)
// S(1)

const mergeTwoLists = (l1, l2) => {
  if (l1 === null) return l2;
  if (l2 === null ) return l1;
    
  if (l1.val > l2.val) {
    let tmp = l1;
    l1 = l2;
    l2 = tmp;
  }
  
  let root = l1;
  let n = l1;
  let s = l2;
  while (n && s) {
    if (n.next && n.next.val > s.val) {
      let tmp = n.next;
      n.next = s;
      s = tmp;
    } else if (n.next === null) {
      n.next = s;
      break;
    }
    n = n.next;
  }  
  return root;
};
