function hasPalindromePermutation(theString) {
  let s = theString.split('');
  let dict = {};
  for (let i=0; i<s.length; i++) {
    dict[s[i]] = ++dict[s[i]] || 1;
  }

  let odd = false;
  for (let key in dict) {
    if (dict[key] % 2 === 1) {
      if (odd) return false;
      odd = true;
    }
  }
  return true;
}

// Tests

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
