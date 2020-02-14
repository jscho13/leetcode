
// O(n+m)
// S(n)

function getPath(graph, s, e) {
  if (!graph[e]) throw new Error;

  let map = new Map();
  let q = [s];
  while (q.length) {
    let n = q.pop();
    let options = graph[n]; 
    for (let i=0; i<options.length; i++) {
      if (map.get(options[i]) === undefined) {
        map.set(options[i], n);
        if (options[i] === e) break;
        q.push(options[i]);
      }
    }
  }

  let ans = [];
  let rebuild = e;
  while (ans.includes(s) === false) {
    ans.unshift(rebuild);
    rebuild = map.get(rebuild);
    if (ans.includes(rebuild)) break;
  }

  return ans.includes(s) ? ans : null;
}












// Tests
const graph = {
  'a': ['b', 'c', 'd'],
  'b': ['a', 'd'],
  'c': ['a', 'e'],
  'd': ['a', 'b'],
  'e': ['c'],
  'f': ['g'],
  'g': ['f']
};

let desc = 'two hop path 1';
let actual = getPath(graph, 'a', 'e');
let expected = ['a', 'c', 'e'];
assertDeepEqual(actual, expected, desc);

desc = 'two hop path 2';
actual = getPath(graph, 'd', 'c');
expected = ['d', 'a', 'c'];
assertDeepEqual(actual, expected, desc);

desc = 'one hop path 1';
actual = getPath(graph, 'a', 'c');
expected = ['a', 'c'];
assertDeepEqual(actual, expected, desc);

desc = 'one hop path 2';
actual = getPath(graph, 'f', 'g');
expected = ['f', 'g'];
assertDeepEqual(actual, expected, desc);

desc = 'one hop path 3';
actual = getPath(graph, 'g', 'f');
expected = ['g', 'f'];
assertDeepEqual(actual, expected, desc);

desc = 'zero hop path';
actual = getPath(graph, 'a', 'a');
expected = ['a'];
assertDeepEqual(actual, expected, desc);

desc = 'no path';
actual = getPath(graph, 'a', 'f');
expected = null;
assertDeepEqual(actual, expected, desc);

desc = 'start node not present';
assertThrowsError(() => {
  getPath(graph, 'h', 'a');
}, desc);

desc = 'end node not present';
assertThrowsError(() => {
  getPath(graph, 'a', 'h');
}, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}


// Original answer
// O(n+m), S(n)

// function getPath(graph, startNode, endNode) {
//   let visited = new Set();
//   let queue = new Queue();
//   queue.enqueue({ chain: startNode, children: graph[startNode] });
//   while (queue.size > 0) {
//     let item = queue.dequeue();
//     let node = item.chain.slice(-1);
//     if (node === endNode) return item.chain.split('');
//     for (var i=0; i<item.children.length; i++) {
//       let child = item.children[i];
//       if (child != endNode && !visited.has(child)) {
//         visited.add(child);
//         queue.enqueue({ chain: item.chain+child, children: graph[child] });
//       }
// 
//       if (child === endNode) {
//         return (item.chain+child).split('');
//       }
//     }
//   }
// 
//   if (!graph[endNode]) {
//     throw new Error;
//   }
//   return null;
// }
