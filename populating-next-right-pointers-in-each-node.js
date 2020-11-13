/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// O(n)
// S(n)
const connect = (root) => {
    let node = root;
    let ary = [node];
    while (ary.length) {
        let len = ary.length;
        
        while (len) {
            let n = ary.shift();
            len--;
            if (n) {
                ary.push(n.left);
                ary.push(n.right);
                if (len === 0) {
                    n.next = null;
                } else {
                    n.next = ary[0];
                }
            }
        }
    }
    
    return node;
};
