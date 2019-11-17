
// O(2n)
// S(1)
// 2 4

const reverseWords = (message) => {
  // a more elegant way to do this
  // is to have while (leftIndex < rightIndex) {
  //              leftIndex++;
  //              rightIndex--;
  //            }
	const reverse = (s, e, message) => {
    let mid = (e-s)/2;
    for (let i=0; i<mid; i++) {
      let temp = message[s+i];
      message[s+i] = message[e-i];
      message[e-i] = temp;
    }
	}

	let s=0;
	reverse(s, message.length-1, message);
	for (let i=0; i < message.length+1; i++) {
		if (message[i]==' ' || i==message.length) {
			reverse(s, i-1, message);
      s=i+1;
		}
	}
}




// Tests

let desc = 'one word';
let input = 'vault'.split('');
reverseWords(input);
let actual = input.join('');
let expected = 'vault';
assertEqual(actual, expected, desc);

desc = 'two words';
input = 'thief cake'.split('');
reverseWords(input);
actual = input.join('');
expected = 'cake thief';
assertEqual(actual, expected, desc);

desc = 'three words';
input = 'one another get'.split('');
reverseWords(input);
actual = input.join('');
expected = 'get another one';
assertEqual(actual, expected, desc);

desc = 'multiple words same length';
input = 'rat the ate cat the'.split('');
reverseWords(input);
actual = input.join('');
expected = 'the cat ate the rat';
assertEqual(actual, expected, desc);

desc = 'multiple words different lengths';
input = 'yummy is cake bundt chocolate'.split('');
reverseWords(input);
actual = input.join('');
expected = 'chocolate bundt cake is yummy';
assertEqual(actual, expected, desc);

desc = 'empty string';
input = ''.split('');
reverseWords(input);
actual = input.join('');
expected = '';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
