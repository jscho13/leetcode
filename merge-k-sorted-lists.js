// O(n*k)
// S(n)
const mergeKLists = (lists) => {
  // find idx with lowest value and make node
  const makeNode = () => {
    let idx=0;
    let node;
    let min=lists[idx].val;
    let num=lists[idx].val;

    for (let i=0; i<lists.length; i++) {
      num = lists[i].val;
      if (num < min) {
        min = num;
        idx = i;
      }
    }

    node = new ListNode(lists[idx].val);
    lists[idx] = lists[idx].next;
    if (lists[idx] === null) lists.splice(idx, 1);      
    return node;
  }

  // initialize
  lists = lists.filter(i => { return i !== null });
  if (lists.length === 0) return null;
  let head = makeNode();
  let node = head;

  // loop through lists
  while (lists.length) {
    node.next = makeNode();
    node = node.next;
  }
  
  return head;
};
