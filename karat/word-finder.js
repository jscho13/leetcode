const words = ["cat", "baby", "dog", "bird", "car", "ax"];
const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";
const string5 = "ccc";
const string6 = "breadmaking";


const wordFinder = (words, string) => {
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

// console.log(wordFinder(words, string1));
// console.log(wordFinder(words, string2));
// console.log(wordFinder(words, string3));
// console.log(wordFinder(words, string4));
// console.log(wordFinder(words, string5));
// console.log(wordFinder(words, string6));



const grid1 = [
    ['c', 'c', 't', 'n', 'a', 'x'],
    ['c', 'c', 'a', 't', 'n', 't'],
    ['a', 'c', 'n', 'n', 't', 't'],
    ['t', 'n', 'i', 'i', 'p', 'p'],
    ['a', 'o', 'o', 'o', 'a', 'a'],
    ['s', 'a', 'a', 'a', 'o', 'o'],
    ['k', 'a', 'i', 'o', 'k', 'i'],
]
const grid2 = [['a']];

const wordFinder2 = (grid, word) => {
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

// console.log(wordFinder2(grid1, "catnip"));
// console.log(wordFinder2(grid1, "cccc"));
// console.log(wordFinder2(grid1, "s"));
// console.log(wordFinder2(grid1, "ant"));
// console.log(wordFinder2(grid1, "aoi"));
// console.log(wordFinder2(grid1, "ki"));
// console.log(wordFinder2(grid1, "aaoo"));
// console.log(wordFinder2(grid1, "ooo"));
// console.log(wordFinder2(grid2, "a"));


const words2_grid1 = [
    ['b', 'a', 'b'],
    ['y', 't', 'a'],
    ['x', 'x', 't']
];
const words1_1 = ['by', 'bat'];

const words2_grid2 = [
    ['A', 'B', 'A', 'B'],
    ['B', 'A', 'B', 'A'],
    ['A', 'B', 'Y', 'B'],
    ['B', 'Y', 'A', 'A'],
    ['A', 'B', 'B', 'A']
];
const words2_1 = ['ABABY', 'ABY', 'AAA', 'ABAB', 'BABB'];
const words2_2 = ['ABABA', 'ABA', 'BAB', 'BABA', 'ABYB'];


const wordFinder3_options = (grid, word) => {
  let ans = [];
  let final = [];
  let dirs = [[0,1],[1,0]];
  let height = grid.length;
  let width = grid[0].length;

  const bt = (sWord, yStart, xStart) => {
    if (sWord.length === 1 && grid[yStart] && sWord[0] === grid[yStart][xStart]) {
      const finalString = ans.slice();
      finalString.push([yStart, xStart]);
      final.push(finalString.slice());
      return;
    }

    for (let d=0; d<dirs.length; d++) {
      if (grid[yStart] && sWord[0] === grid[yStart][xStart]) {
        let newY = yStart+dirs[d][0];
        let newX = xStart+dirs[d][1];

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

const is_unique = (previousResults, newResult) => {
  const visited = {};
  for (let i=0; i<previousResults.length; i++) {
    let coordinates = previousResults[i];

    for (let coord=0; coord<coordinates.length; coord++) {
      let coords = coordinates[coord];
      let key = `${coords[0]},${coords[1]}`;
      visited[key] = true;
    };
  }

  for (let j=0; j<newResult.length; j++) {
    let coords = newResult[j];
    let key = `${coords[0]},${coords[1]}`;
    if (visited[key]){
      return false;
    }
  }

  return true;
}

const filter_results = (compiledResults, allResults) => {
  if (allResults.length === 0) {
    return compiledResults;
  }

  const [firstResult, ...rest] = allResults;
  for (let r=0; r<firstResult.length; r++) {
    const newResult = firstResult[r];

    if (is_unique(compiledResults, newResult)) {
      const finalResults = [...compiledResults];
      finalResults.push(newResult.slice());
      let final = filter_results(finalResults, rest); 
      if (final.length) return final;
    }
  }

  return [];
}


const wordFinder3_filter_results = (allResults) => {
  return filter_results([], allResults);
}

const wordFinder3 = (grid, words) => {
  let allResults = [];
	for (let wIdx=0; wIdx<words.length; wIdx++) {
    let word = words[wIdx];
    let wordIndexs = wordFinder3_options(grid, word);
    allResults.push(wordIndexs.slice()); 
	}

  const uniqueResults = wordFinder3_filter_results(allResults);
  return uniqueResults;
}

// console.log(wordFinder3(words2_grid1, words1_1));
// console.log(wordFinder3(words2_grid2, words2_1));
// console.log(wordFinder3(words2_grid2, words2_2));
