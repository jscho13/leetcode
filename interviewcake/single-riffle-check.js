
function isSingleRiffle(half1, half2, shuffledDeck) {
  let deck = []

  while (half1.length > 0 && half2.length > 0) {
    if (half1[0] < half2[0]) {
      deck.push(half1.shift());
    } else {
      deck.push(half2.shift());
    }
  }

  if (half1.length > 0) deck = deck.concat(half1);
  if (half2.length > 0) deck = deck.concat(half2);

  let ans = (JSON.stringify(deck) ===  JSON.stringify(shuffledDeck))
  return ans;
}




// Tests
let desc = 'both halves are the same length';
let actual = isSingleRiffle([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
assertEquals(actual, true, desc);

desc = 'halves are different lengths';
actual = isSingleRiffle([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'one half is empty';
actual = isSingleRiffle([], [2, 3, 6], [2, 3, 6]);
assertEquals(actual, true, desc);

desc = 'shuffled deck is missing cards';
actual = isSingleRiffle([1, 5], [2, 3, 6], [1, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'shuffled deck has extra cards';
actual = isSingleRiffle([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
assertEquals(actual, false, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
