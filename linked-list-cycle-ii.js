/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
    // tortoise and hare to see if circular
    // calculate length of circle
    // travel from meeting + head
    // return that node
    
    let pt1 = head;
    let pt2 = head;    
    while (pt2 && pt2.next && pt2.next.next) {
        pt1 = pt1.next;
        pt2 = pt2.next.next
        
        if (pt1 === pt2) {
            while (pt1 != head) {
                pt1 = pt1.next;
                head = head.next;
            }
            return pt1;
        }
    }
    
    return null;
};
