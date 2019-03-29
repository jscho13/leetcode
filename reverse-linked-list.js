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

// recursively
var reverseList = function(node, prev) {
  if (node === null && prev === undefined) return null;
  if (node === null) return prev;
  var temp = node.next;
  node.next = prev;
  prev = node;
  node = temp;
  return reverseList(node, prev);
}
