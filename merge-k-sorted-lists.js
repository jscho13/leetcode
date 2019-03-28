// Time-complexity: O(m*n)
// Space-complexity: O(1)

var mergeKLists = function(lists) {
  if (lists.length === 0) return null;
  for (var l=0; l<lists.length-1; l++) {
    lists[l+1] = mergeLists(lists[l], lists[l+1]);
  }

  return lists[lists.length-1];
};

var mergeLists = function(listA, listB) {
  if (listA === null) return listB;
  if (listB === null) return listA;

  var head, newNode, list;
  while (listA != null && listB != null) {
    if (listB.val >= listA.val) {
      newNode = listA;
      // this is overwriting the reference to the object
      listA = listA.next;
    } else {
      newNode = listB;
      listB = listB.next;
    }
    
    if (head === undefined) {
      head = newNode;
      list = newNode;
    } else {
      // this is modifying the object
      list.next = newNode;
      list = list.next;
    }
  }

  while (listA != null) {
    list.next = listA;
  }

  while (listB != null) {
    list.next = listB;
  }

  return head;
}
