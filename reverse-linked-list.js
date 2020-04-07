// iteratively
// var reverseList = function(head) {
//   if (head === null) return head;
//   var prev;
//   var next;
//   var node = head;
//   while (node) {
//     next = node.next;
//     node.next = prev;
//     prev = node;
//     node = next;
//   }
//   return prev;
// };


// recursive only
const reverseList = (node, prev=null) => {
  if (node === null) return prev;
  let temp = node.next;
  node.next = prev;
  return reverseList(temp, node);
};
