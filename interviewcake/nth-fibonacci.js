
function fib(n) {
  if (n<0) {
    throw new Error();
  } else if (n == 0 || n == 1) {
    return n;
  }

  let fib=[0,1];
	for(let i=1; i<n; i++) {
    next = fib[0] + fib[1];
    fib[0] = fib[1];
    fib[1] = next;
	}
	
  return fib[1];
}





// Tests

let desc = 'zeroth fibonacci';
let actual = fib(0);
let expected = 0;
assertEqual(actual, expected, desc);

desc = 'first fibonacci';
actual = fib(1);
expected = 1;
assertEqual(actual, expected, desc);

desc = 'second fibonacci';
actual = fib(2);
expected = 1;
assertEqual(actual, expected, desc);

desc = 'third fibonacci';
actual = fib(3);
expected = 2;
assertEqual(actual, expected, desc);

desc = 'fifth fibonacci';
actual = fib(5);
expected = 5;
assertEqual(actual, expected, desc);

desc = 'tenth fibonacci';
actual = fib(10);
expected = 55;
assertEqual(actual, expected, desc);

desc = 'negative fibonacci';
const negativeFib = () => (fib(-1));
assertThrowsError(negativeFib, desc);

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


// O(n) and S(n)
// function fib(n) {
//   if (n<0) throw new Error;
//   let x=2;
//   let memo = [0,1];
//   while (x <= n & x > 1) {
//     memo[x] = memo[x-1] + memo[x-2];
//     x++;
//   }
// 
//   return memo[n];
// }

