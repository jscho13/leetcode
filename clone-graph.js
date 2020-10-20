/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// O(n)
// S(n)
const cloneGraph = (node) => {
  if (node === null) return null;
  let [ary, q] = [[],[node]];
  while (q.length) {
    let n = q.shift();
    if (!ary[n.val]) ary[n.val] = new Node(n.val);
    n.neighbors.forEach(x => {
      if (!ary[x.val]) {
        ary[x.val] = new Node(x.val);
        q.push(x);
      }
      ary[n.val].neighbors.push(ary[x.val]);
    });
  }
  
  return ary[node.val];
};

// Attempt 2
// It's basically the same, but in DFS
const cloneGraph = (root) => {
    if (!root) return null;
    let list = [];
    
    const dfs = n => {
        if (!list[n.val]) {
            const node = new Node(n.val);
            list[n.val] = node;
            for (let i=0; i<n.neighbors.length; i++) {
                let neighbor = n.neighbors[i];
                if (!list[neighbor.val]) {
                    dfs(neighbor);
                }
                node.neighbors.push(list[neighbor.val]);
            }
        }
    }

    dfs(root);
    return list[root.val];
};
