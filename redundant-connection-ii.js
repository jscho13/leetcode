/**
 * @param {number[][]} edges
 * @return {number[]}
 */

// O(n) time-complexity. O(1) time-complexity
var findRedundantDirectedConnection = function(edges) {
  var adj_list = {};
  var last_edge_added = [];

  // loop and create adjancency list as object
  for(var i=0; i<edges.length; i++) {
    var parent_n = edges[i][0]
    var child_n = edges[i][1]
    // check if key exists. if it doesn't make it. if it does add it
    if (child_n in adj_list) {
      adj_list[child_n].push(parent_n);
      last_edge_added = edges[i]; 
    } else {
      adj_list[child_n] = [parent_n];
    }
  }

  // return the last one added
  return last_edge_added;
};
