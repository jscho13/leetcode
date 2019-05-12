function reverse(a) {
  for (var i=0; i<a.length/2; i++) {
    let temp = a[i];
    a[i] = a[a.length-i-1];
    a[a.length-i-1] = temp;
  }

  return a;
}

console.log(reverse([1,2,3,4,5]));
console.log(reverse([1,2,3,4]));
