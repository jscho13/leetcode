
// O(log n)
// S(log n)

/*
  if you put this in a while loop
  there's no recursion. so it ends up
  being S(1) or linear time
  even better!
*/


const findRotationPoint = (words) => {
  // Find the rotation point in the vector
	if (words.length < 2) return false;
	if (words[0] > words[1]) return 1;

	let last = words.length-1; 
	if (words[last-1] > words[last]) return last;
  
	const checkIdx = (idx, words) => {
    if (idx === 0 || idx === last) return false;
		let left = words[idx-1] < words[idx]; 
		let right = words[idx] < words[idx+1]; 
    let idxUp = Math.round((idx+last)/2);
    let idxDown = Math.floor(idx/2);

		if (left && right) {
			return checkIdx(idxDown, words) || checkIdx(idxUp, words);
		} else {
      return idx;
		}
	}

  return checkIdx(Math.floor(words.length/2), words);
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

desc = 'first array';
actual = findRotationPoint(['e', 'a', 'b', 'c', 'd']);
expected = 1;
assertEquals(actual, expected, desc);

desc = 'last array';
actual = findRotationPoint(['b', 'c', 'd', 'e', 'a']);
expected = 4;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

