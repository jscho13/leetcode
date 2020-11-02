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
// O(n^2)
// S(1)
const insertionSortList = (head) => {
    let node = head;
    
    while (node && node.next) {
        if (node.next.val < node.val) {
            let temp = node.next;
            node.next = node.next.next;

            let insertNode = head;
            while (insertNode) {
                if (insertNode.val > temp.val) {
                    temp.next = insertNode;
                    head = temp;
                    break;
                } else if (insertNode.next && insertNode.next.val > temp.val) {
                    let temp2 = insertNode.next;
                    insertNode.next = temp;
                    temp.next = temp2;
                    break;
                } else {
                    insertNode = insertNode.next;
                }
            }
        } else {
            node = node.next;
        }
    }
    
    return head;
};
