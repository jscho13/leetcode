function highestProductOf3(arrayOfInts) {
  // Calculate the highest product of three numbers
  if (arrayOfInts.length < 3) throw 'array is too short';
  let bot2 = arrayOfInts.slice(0,2);
  let top3 = arrayOfInts.splice(0,3);

  for (var i=0; i<arrayOfInts.length; i++) {
    let min = Math.min(...top3);
    let max = Math.max(...bot2);

    let minIdx = top3.indexOf(min);
    let maxIdx = bot2.indexOf(max);

    let num = arrayOfInts[i];

    if (min < num) top3[minIdx] = num;
    if (max > num) bot2[maxIdx] = num;
  }

  let total2 = bot2.reduce((a, b) => { return a*b }, Math.max(...top3) );
  let total = top3.reduce((a, b) => a*b );

  return (total > total2) ? total : total2;
}











// Tests

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (highestProductOf3([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (highestProductOf3([1]));
assertThrowsError(oneNumber, desc);

desc = 'error with two numbers';
const twoNumber = () => (highestProductOf3([1, 1]));
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
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
