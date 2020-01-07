function isValid(code) {
	let q = [];
	let map1 = {
    '[': ']',
    '{': '}',
    '(': ')'
  };

	let map2= {
    ']': '[',
    '}': '{',
    ')': '('
	}

	for (var i=0; i<code.length;i++) {
		let ch = code[i];
		if (map1[ch]) q.push(ch);

		if (map2[ch]) {
			let close = q.pop();
      if (close != map2[ch] || close === undefined) return false;
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

desc = 'extra opener';
assertEqual(isValid('([[]]()'), false, desc);

desc = 'empty string';
assertEqual(isValid(''), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
