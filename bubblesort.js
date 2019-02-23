var bubbleSort = function(ary) {
  var unsortedLength = ary.length-1;
  var unsorted = true;
  // We want length-1 because we stop swapping at the second to last element
  while (unsorted) {
    unsorted = false;
    for (var i=0; i<unsortedLength; i++) {
      // Swap
      if (ary[i] > ary[i+1]) {
        var tmp = ary[i];
        ary[i] = ary[i+1];
        ary[i+1] = tmp;
        unsorted = true;
      }
    }
    unsortedLength--;
  }
  return ary;
}


console.log(bubbleSort([]));
