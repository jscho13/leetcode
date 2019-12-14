function getPermutations(string) {
  if (string.length === 0) return new Set(['']);
  if (string.length === 1) return new Set([string]);

  var ans = new Set();
  string = string.split('');
  for(var i=0; e<string.length; e++) {
    getSwaps(string, 0)
  }

  function getSwaps(string, s) {
    ans.add(string.join(''));
    if (s === string.length-1) return;

    for(var e=s+1; e<string.length; e++) {
      var temp = string[s];
      string[s] = string[e]
      string[e] = temp;

      getSwaps(string, s+1);

      string[e] = string[s];
      string[s] = temp;
    }
  }

  return ans;
}



















// Tests

let desc = 'empty string';
let input = '';
let actual = getPermutations(input);
let expected = new Set(['']);
assert(isSetsEqual(actual, expected), desc);

desc = 'one character string';
input = 'a';
actual = getPermutations(input);
expected = new Set(['a']);
assert(isSetsEqual(actual, expected), desc);

desc = 'two character string';
input = 'ab';
actual = getPermutations(input);
expected = new Set(['ab', 'ba']);
assert(isSetsEqual(actual, expected), desc);

desc = 'three character string';
input = 'abc';
actual = getPermutations(input);
expected = new Set(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
assert(isSetsEqual(actual, expected), desc);

function isSetsEqual(as, bs) {
  if (as.size !== bs.size) {
    return false;
  }
  for (let a of as) {
    if (!bs.has(a)) return false;
  }
  return true;
}

function assert(condition, desc) {
  if (condition) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL`);
  }
}
