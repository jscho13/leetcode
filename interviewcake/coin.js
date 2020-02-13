
// BT
// O(n(n*k))
// S(n)
function changePossibilities(t, nums) {
  // Calculate the number of ways to make change
  let ans = 0;
  let res = [];

  const bt = (s) => {
    let sum = res.reduce((acc, val) => { return acc+val }, 0);
    if (sum === t) {
      ans++;
      return;
    }

    if (sum > t) {
      return;
    }

    for (let i=s; i<nums.length; i++) {
      res.push(nums[i]);
      bt(i);
      res.pop();
    }
  }

  bt(0);
  return ans;
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



