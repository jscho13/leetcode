/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

type Node = ListNode | null;

const mergeKLists = (lists: (Node)[]): Node => {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    
    let l1 = lists.shift();
    while (lists.length) l1 = merge(l1, lists.shift());
    return l1;
};

const merge = (ary1: Node, ary2: Node) => {
    if (ary1 === null) return ary2;
    if (ary2 === null) return ary1;

    let head = new ListNode(0);
    let node = head;
    while (ary1 && ary2) {
        if (ary1.val > ary2.val) {
            node.next = new ListNode(ary2.val);
            ary2 = ary2.next;
        } else {
            node.next = new ListNode(ary1.val);
            ary1 = ary1.next;
        }
        node = node.next;
    }

    if (ary1) node.next = ary1;
    if (ary2) node.next = ary2;
    return head.next;
}
