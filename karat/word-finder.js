const words = ["cat", "baby", "dog", "bird", "car", "ax"];
const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";
const string5 = "ccc";
const string6 = "breadmaking";


const wordFinder = (string, words) => {
	const map = new Map();
	for (let idx=0; idx<string.length; idx++) {
    let chr = string[idx];
    let chrValue = map.get(chr)+1 || 1;
    map.set(chr, chrValue);
	}

  for (let i=0; i<words.length; i++) {
    let clone = new Map(map);
    let word = words[i];

    for (let j=0; j<word.length; j++) {
      let ch = word[j];
      let count = clone.get(ch);
      if (count>0) {
        clone.set(ch, count-1);
        if (j===word.length-1) return word;
      } else {
        break;
      }
    }
  }

  return null;
} 

// console.log(wordFinder(string1, words));
// console.log(wordFinder(string2, words));
// console.log(wordFinder(string3, words));
// console.log(wordFinder(string4, words));
// console.log(wordFinder(string5, words));
// console.log(wordFinder(string6, words));


const grid1 = [
	['c', 'c', 'x', 't', 'i', 'b'],
	['c', 'c', 'a', 't', 'n', 'i'],
	['a', 'c', 'n', 'n', 't', 't'],
	['t', 'c', 's', 'i', 'p', 't'],
	['a', 'o', 'o', 'o', 'a', 'a'],
	['o', 'a', 'a', 'a', 'o', 'o'],
	['k', 'a', 'i', 'c', 'k', 'i']
];
const grid2 = [['a']];

const wordFinder2 = (word, grid) => {
  let ans = [];
  let final = [];
  let dirs = [[0,1],[1,0]];
  let height = grid.length;
  let width = grid[0].length;

  const bt = (sWord, yStart, xStart) => {
    if (sWord.length === 0) {
      final = ans.slice();
      return;
    }

    for (let d=0; d<dirs.length; d++) {
      let newY = yStart+dirs[d][0];
      let newX = xStart+dirs[d][1];

      if (grid[yStart] && sWord[0] === grid[yStart][xStart]) {
        ans.push([yStart, xStart]);
        bt(sWord.slice(1, sWord.length), newY, newX);
        ans.pop();
      }
    }
  }

  for (let y=0; y<height; y++) {
    for (let x=0; x<width; x++) {
      if (word[0] === grid[y][x]) {
        bt(word, y, x);
      }
    }
  }

  return final;
}

// console.log(wordFinder2("catnip", grid1));
// console.log(wordFinder2("cccc", grid1));
// console.log(wordFinder2("s", grid1));
// console.log(wordFinder2("bit", grid1));
// console.log(wordFinder2("aoi", grid1));
// console.log(wordFinder2("ki", grid1));
// console.log(wordFinder2("aaa", grid1));
// console.log(wordFinder2("ooo", grid1));
// console.log(wordFinder2("a", grid2));



const words2_grid1 = [
  ["c", "r", "c", "a", "r", "s"],
  ["a", "b", "i", "t", "n", "b"],
  ["t", "e", "n", "n", "t", "i"],
  ["x", "s", "i", "i", "p", "t"]
]
const words2_1 = ["bit", "catnip", "cat"];
const words2_2 = [ "cat", "ten" ];

const words2_grid2 = [
    ["b", "a", "t"],
    ["y", "x", "b"],
    ["x", "x", "y"],
];
const words2_words2 = ["by", "bat"];


const wordFinder3 = (words, grid) => {
  let final = [];
	for (let wIdx=0; wIdx<words.length; wIdx++) {
    let word = words[wIdx];
    let wordIndexs = wordFinder2(word, grid);
    final.push(wordIndexs.slice()); 
	}

  return final;
}

console.log(wordFinder3(words2_1, words2_grid1));
console.log(wordFinder3(words2_2, words2_grid1));
console.log(wordFinder3(words2_words2, words2_grid2));



