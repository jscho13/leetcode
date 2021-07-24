/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */

// Attempt 1
// O(n)
// S(n)

const validateBinaryTreeNodes = (n, leftChild, rightChild) => {
    // create a dictionary of root candidates
    const roots = new Set();
    for (let r=0; r<n; r++) {
        roots.add(r);
    }
    
    for (let i=0; i<n; i++) {
        roots.delete(leftChild[i]);
        roots.delete(rightChild[i]);
    }
    
    // if theres a single root start there
    if (roots.size === 0 || roots.size > 1) return false;
    const root = roots.values().next().value;

    // visit all leaves once
    const leaves = new Set();
    const q = [root];
    while (q.length) {
        let node = q.pop();
        if (node !== -1) {
            if (leaves.has(node)) {
                return false;
            } else {
                leaves.add(node);
                q.push(leftChild[node]);
                q.push(rightChild[node]);
            }            
        }
    }
    
    // if success return true
    return leaves.size === n;
};
