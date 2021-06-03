/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = (words, maxWidth) => {
  let ary=[[]];
  let len=0;

  // create lines with words
  for (let i=0; i<words.length; i++) {
    let word=words[i];
    if (len+word.length > maxWidth) {
      ary.push([]);
      len=0;
    }
    ary[ary.length-1].push(word);
    ary[ary.length-1].push(' ');
    len+=word.length+1;
  }

  // add padding
  for (let rowIdx=0; rowIdx<ary.length; rowIdx++) {
    let row = ary[rowIdx];
    row.pop();

    if (row.length > 1 && rowIdx != ary.length-1) {
      let str=row.join('');
      let padding = maxWidth-str.length;
      let idx=1;
      while (padding) {
        row[idx] += ' ';
        padding--;
        idx = (idx+2)%(row.length-1);
      }
    }
  }

  // add end padding if necessary
  for (let rowIdx=0; rowIdx<ary.length; rowIdx++) {
    let row = ary[rowIdx];
    let str=row.join('');
    let padding = maxWidth-str.length;
    let blanks = ' '.repeat(padding);
    if (row.length === 1 || rowIdx === ary.length-1) row[row.length-1]+=blanks;
  }
  
  // join arrays and return
  ary = ary.map(row => { return row.join(''); });
  return ary;
};
