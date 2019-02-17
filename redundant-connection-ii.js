/**
 * @param {number[][]} edges
 * @return {number[]}
 */

var Node = function(value) {
  this.val = value;
  this.children = [];
  this.visited = false;
  this.parents = [];
  this.callParent = null;
}

var findRedundantDirectedConnection = function(edges) {
  // construct a node list
  var nodeList = [];
  for(var i=0; i<edges.length; i++) {
    var parentVal = edges[i][0];
    var childVal = edges[i][1];

    if (nodeList[parentVal] && nodeList[childVal]) {
      // add the node to children if it isn't there
      nodeList[parentVal].children.push(childVal);
      nodeList[childVal].parents.push(parentVal);
    } else {
      // make the nodes if they don't exist
      var parentNode = nodeList[parentVal] || new Node(parentVal);
      parentNode.children.push(childVal);
      nodeList[parentVal] = parentNode;

      var childNode = nodeList[childVal] || new Node(childVal);
      childNode.parents.push(parentVal);
      nodeList[childVal] = childNode;
    }
  }
  // bfs recursion
  var ans = [];
  var q = [nodeList[1]];
  
  while (q.length > 0) {
    var node = q.shift();
    var children = node.children;
    var parents = node.parents;

    if (node.visited === true) {
      for(var p=0; p<parents.length; p++) {
        var parentIdx = parents[p];
        if (nodeList[parentIdx].visited) ans.push([parentIdx, node.val]);
      }
    } else {
      node.visited = true;
      nodeList[node.val] = node;
      for(var i=0; i<children.length; i++) {
        var childIdx = children[i];
        q.push(nodeList[childIdx]);
      }
    }
  }

  // find the latest one in the ans that matches edges
  while (edges.length > 0) {
    var edge = edges.pop();
    for (var a=0; a<ans.length; a++){
      if (JSON.stringify(ans[a]) == JSON.stringify(edge)) return edge;
    }
  }

  return [];
};
