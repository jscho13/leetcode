
function mergeArrays(a, b) {
  let merged = [];
  while (a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) {
      merged.push(a.shift());
    } else {
      merged.push(b.shift());
    }
  }

  if (a.length > 0) merged = merged.concat(a);
  if (b.length > 0) merged = merged.concat(b);

  return merged;
}

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];
const myArray2 = [3, 4, 6];
const alicesArray2 = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
console.log(mergeArrays(myArray2, alicesArray2));
