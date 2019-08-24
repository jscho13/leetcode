function isValid(code) {
	let q = [];
	let open = ['[', '{', '('];
	let closed = [']', '}', ')'];

	for (var i=0; i<code.length;i++) {
		if (open.includes(code[i])) {
			q.push(code[i]);
		}
		if (closed.includes(code[i])) {
			const close = q.pop();
			if (close === '[' && code[i] !== ']') {
				return false;
			} else if (close === '{' && code[i] !== '}') {
				return false;
			} else if (close === '(' && code[i] !== ')') {
				return false;
			} else if (close === undefined) {
				return false;
			}
		}
	}

	if (q.length > 0) return false;

  return true;
}


// Tests
let desc = 'valid short code';
assertEqual(isValid('()'), true, desc);

desc = 'valid longer code';
assertEqual(isValid('([]{[]})[]{{}()}'), true, desc);

desc = 'mismatched opener and closer';
assertEqual(isValid('([][]}'), false, desc);

desc = 'missing closer';
assertEqual(isValid('[[]()'), false, desc);

desc = 'extra closer';
assertEqual(isValid('[[]]())'), false, desc);

desc = 'empty string';
assertEqual(isValid(''), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
