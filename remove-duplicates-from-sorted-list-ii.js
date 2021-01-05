/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// O(n)
// S(1)
const deleteDuplicates = (head) => {
    if (!head) return head;
    let top = new ListNode(0);
    top.next = head;

    let prev = top;
    let node = head;
    let tail = node.next;
    while (node && tail) {
        if (node.val === tail.val) {
            while (tail && node.val === tail.val) {
                node = node.next;
                tail = node.next;
            }
            node = tail;
            prev.next = node;
            if (tail) tail = tail.next;
        } else {
            prev = node;
            node = node.next;
            tail = node.next;
        }
    }
    
    return top.next;
};
