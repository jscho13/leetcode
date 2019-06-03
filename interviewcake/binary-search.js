
function findRotationPoint(words) {
  let min = 0;
  let max = words.length-1;

  while (min < max) {
    let half = Math.floor((max-min)/2);
    let guess = min + half;

    if (words[guess-1] > words[guess] ) {
      return guess;
    } else if (words[guess] > words[guess+1]) {
      return guess+1;
    }

    if (words[max] < words[guess]) {
      min = guess;
    } else {
      max = guess;
    }
  }

  return false;
}


// Tests
let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
  'undulate', 'xenoepist', 'asymptote',
  'babka', 'banoffee', 'engender',
  'karpatka', 'othellolagkage']);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

