/**
 * @param {number[][]} edges
 * @return {number[]}
 */

var Node = function(value) {
  this.val = value;
  this.children = [];
  this.parents = [];
  this.visited = false;
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

  // use dfs recursion can have two results
  // 1. it's okay
  // 2. it's circular
  // start with the first thing we find that has no parent
  var start=1;
  for (var i=1; i<nodeList.length; i++) {
    if (nodeList[i].parents.length === 0) {
      start = i
      break;
    }
  }
  var ans = findCircular(nodeList, null, start);

  // There's a third case that's not circular, but a node might have multiple parents
  if (ans.length === 0) {
    for (var i=1; i<nodeList.length; i++) {
      var parents = nodeList[i].parents;
      if (parents.length > 1) {
        for (var p=0; p<parents.length; p++) {
          ans.push([parents[p], i]);
        }
      }
    }

    // find the latest edge that matches ans
    while (edges.length > 0) {
      var edge = edges.pop();
      for (var a=0; a<ans.length; a++) {
        if (JSON.stringify(ans[a]) == JSON.stringify(edge)) return edge;
      }
    }
  }
  return ans;
};

var findCircular = function(nodeList, pn, n) {
  var circular;
  if (nodeList[n].visited === true) {
    return [pn, n];
  } else {
    nodeList[n].visited = true;
    var children = nodeList[n].children;
    for (var c=0; c<children.length; c++) {
      circular = findCircular(nodeList, n, children[c]);
      if (circular) return circular;
    }
  }
  return [];
}
