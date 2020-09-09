/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const flatten = (head, tail=null) => {
  if (head === null) return null;
  
  let n = head;
  while (n.next || n.child) {
    if (n.child) {
      let child = flatten(n.child, n.next);
      n.child = null;
      n.next = child;
      child.prev = n;
    } else {
      n = n.next;
    }
  }

  if (tail) {
    n.next = tail;
    tail.prev = n;
  }
  return head;
};
