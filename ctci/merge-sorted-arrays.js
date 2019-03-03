var mergeArrays = function(arry1, arry2) {
  var idx=0;

  while (arry2.length > 0) {
    var val = arry2.shift();
    while (val > arry1[idx]) {
      idx++;
    }

    var temp = arry1.splice(idx, arry1.length);
    arry1.push(val);
    arry1 = arry1.concat(temp);
    idx++;
  }
  return arry1;
}

var first = [1,4,5,6,7,8,9,11,15,17]
var second = [5,6,7,9,12,15,16,17,20]
console.log(mergeArrays(first, second));
