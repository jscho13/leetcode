/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// O(n+n2)
// S(n+n2)
const addTwoNumbers = (l1, l2) => {
    let n1 = [];
    let n2 = [];
    while (l1) {
        n1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        n2.push(l2.val);
        l2 = l2.next;
    }
    
    let sum = 0;
    let rem = 0;
    let vals = [];
    
    while (n1.length || n2.length) {
        let top = n1.pop();
        let bot = n2.pop();
        if (top !== undefined && bot !== undefined) {
            sum = top+bot+rem;
        } else if (top !== undefined) {
            sum = top+rem;
        } else {
            sum = bot+rem;
        }
        rem = (sum > 9) ? 1 : 0;
        vals.unshift(sum%10);
    }
    if (rem) vals.unshift(1);

    let root = new ListNode();
    let ans = root;
    while (vals.length) {
        let val = vals.shift();
        let node = new ListNode(val);
        ans.next = node;
        ans = ans.next;
    }
    return root.next;
};
