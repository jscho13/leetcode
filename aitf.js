
const parentChildPairs = [
  [5, 6], [1, 3], [2, 3], [3, 6], [15, 12],
  [5, 7], [4, 5], [4, 9], [9, 12], [30, 16]
];

const findNodesWithZeroAndOneParents = (parentChildPairs) => {
  const dict = {};
  // child to parent adj list
  for (let i=0; i<parentChildPairs.length; i++) {
    let parent = parentChildPairs[i][0];
    let child = parentChildPairs[i][1];
    if (dict[child]) {
      dict[child].push(parent);
    } else {
      dict[child] = [parent];
    }

    if (dict[parent] === undefined) dict[parent] = [];
  }

  const zeroChildren = [];
  const oneChildren = [];
  const pairs = Object.entries(dict);
  for (let j=0; j<pairs.length; j++) {
    const pair = pairs[j];
    if (pair[1].length === 0) {
      zeroChildren.push(pair[0]);
    } else if (pair[1].length === 1) {
      oneChildren.push(pair[0]);
    }
  }

  return [zeroChildren, oneChildren];
}

// console.log(findNodesWithZeroAndOneParents(parentChildPairs)); 
// [1, 2, 4, 15, 30],   // Individuals with zero parents
// [5, 7, 9, 16]        // Individuals with exactly one parent






const parentChildPairs1 = [
    [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
    [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9],
    [15, 13]
];

const parentChildPairs2 = [
    [1, 3], [11, 10], [11, 12], [2, 3], [10, 2], 
    [10, 5], [3, 4], [5, 6], [5, 7], [7, 8]
];

const hasCommonAncestor = (parentChildPairs, child1, child2) => {
  const dict = {};
  // child to parent adj list
  for (let i=0; i<parentChildPairs.length; i++) {
    let parent = parentChildPairs[i][0];
    let child = parentChildPairs[i][1];
    if (dict[child]) {
      dict[child].push(parent);
    } else {
      dict[child] = [parent];
    }

    if (dict[parent] === undefined) dict[parent] = [];
  }

  const child1Parents = {};
  let match = false;

  const dfs = (node) => {
    let parents = dict[node];
    for (let p=0; p<parents.length; p++) {
      let parent = parents[p];
      if (child1Parents[parent]) match = true;
      child1Parents[parent] = true;
      dfs(parent);
    }
  }

  dfs(child1);
  dfs(child2);
  return match;
}

// console.log(hasCommonAncestor(parentChildPairs1, 3, 8)) //=> false
// console.log(hasCommonAncestor(parentChildPairs1, 5, 8)) //=> true
// console.log(hasCommonAncestor(parentChildPairs1, 6, 8)) //=> true
// console.log(hasCommonAncestor(parentChildPairs1, 6, 9)) //=> true
// console.log(hasCommonAncestor(parentChildPairs1, 1, 3)) //=> false
// console.log(hasCommonAncestor(parentChildPairs1, 3, 1)) //=> false
// console.log(hasCommonAncestor(parentChildPairs1, 7, 11)) //=> true
// console.log(hasCommonAncestor(parentChildPairs1, 6, 5)) //=> true
// console.log(hasCommonAncestor(parentChildPairs1, 5, 6)) //=> true
// console.log(hasCommonAncestor(parentChildPairs2, 4, 12)) ////=> true
// console.log(hasCommonAncestor(parentChildPairs2, 1, 6)) //=> false
// console.log(hasCommonAncestor(parentChildPairs2, 1, 12)) //=> false










const parentChildPairs3 = [
    [2, 3], [3, 15], [3, 6], [5, 6], [5, 7],
    [4, 5], [4, 8], [4, 9], [9, 11], [14, 4],
];

const parentChildPairs4 = [
    [2, 3], [3, 15], [3, 6], [5, 6], [5, 7],
    [4, 5], [4, 8], [4, 9], [9, 11], [14, 2], [1, 9]
];

const findEarliestAncestor = (parentChildPairs, root) => {
  const dict = {};
  // child to parent adj list
  for (let i=0; i<parentChildPairs.length; i++) {
    let parent = parentChildPairs[i][0];
    let child = parentChildPairs[i][1];
    if (dict[child]) {
      dict[child].push(parent);
    } else {
      dict[child] = [parent];
    }

    if (dict[parent] === undefined) dict[parent] = [];
  }

  let max = 0;
  let maxNode = null;

  const dfs = (node, level) => {
    let parents = dict[node];
    if (parents) {
      for (let p=0; p<parents.length; p++) {
        let parent = parents[p];
        if (level>=max) {
          max = level;
          maxNode = parent;
        }
        dfs(parent, level+1);
      }
    }
  }

  dfs(root, 0);
  return maxNode;
}

// console.log(findEarliestAncestor(parentChildPairs3, 8)); //=> 14
// console.log(findEarliestAncestor(parentChildPairs3, 7)); //=> 14
// console.log(findEarliestAncestor(parentChildPairs3, 6)); //=> 14
// console.log(findEarliestAncestor(parentChildPairs3, 15)); //=> 2
// console.log(findEarliestAncestor(parentChildPairs3, 14)); //=> null or -1
// console.log(findEarliestAncestor(parentChildPairs3, 11)); //=> 14
// console.log(findEarliestAncestor(parentChildPairs4, 8)); //=> 4
// console.log(findEarliestAncestor(parentChildPairs4, 7)); //=> 4
// console.log(findEarliestAncestor(parentChildPairs4, 6)); //=> 14
// console.log(findEarliestAncestor(parentChildPairs4, 15)); //=> 14
// console.log(findEarliestAncestor(parentChildPairs4, 14)); //=> null or -1
// console.log(findEarliestAncestor(parentChildPairs4, 11)); //=> 4 or 1
