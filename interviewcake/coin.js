function changePossibilities(amountLeft, denominations) {
  let ans = [];
  while(denominations.length > 0) {
    let val = denominations[0];
    ans[val] = ans[val]+1 || 1;

    while (val < amountLeft) {
      for (let i=0; i<denominations.length; i++) {
        let sum = val + denominations[i];
        ans[sum] = (ans[sum] || 0) + ans[val];
      }
      val = val+denominations[0];
    }

    denominations.shift();
  }

  return ans[amountLeft];
}







// Tests

let desc = 'sample input';
let actual = changePossibilities(4, [1, 2, 3]);
let expected = 4;
assertEqual(actual, expected, desc);

desc = 'one way to make zero cents';
actual = changePossibilities(0, [1, 2]);
expected = 1;
assertEqual(actual, expected, desc);

desc = 'no ways if no coins';
actual = changePossibilities(1, []);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'big coin value';
actual = changePossibilities(5, [25, 50]);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'big target amount';
actual = changePossibilities(50, [5, 10]);
expected = 6;
assertEqual(actual, expected, desc);

desc = 'change for one dollar';
actual = changePossibilities(100, [1, 5, 10, 25, 50]);
expected = 292;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}
