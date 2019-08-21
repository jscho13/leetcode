/*
Optimal solution would be:
	O(n)
	S(1)
*/ 

function getClosingParen(sentence, openingParenIndex) {
  // Find the position of the matching closing parenthesis
	let q = [];
	for (let i=openingParenIndex; i<sentence.length; i++) {
		let val = sentence[i];
		if (val === '(') {
			q.push(val);
		} else if (val === ')') {
			q.pop();
		}

		if (q.length === 0) return i;
	}

	if (q.length > 0) throw Error;
  return 0;
}

// Tests

let desc = 'all openers then closers';
let actual = getClosingParen('((((()))))', 2);
let expected = 7;
assertEqual(actual, expected, desc);

desc = 'mixed openers and closers';
actual = getClosingParen('()()((()()))', 5);
expected = 10;
assertEqual(actual, expected, desc);

desc = 'no matching closer';
const noCloser = () => (getClosingParen('()(()', 2));
assertThrowsError(noCloser, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
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
