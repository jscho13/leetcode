/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = (words, maxWidth) => {
  let ary=[];
  let line=[];
  let len=0;

  // create lines with words
  for (let i=0; i<words.length; i++) {
    let word=words[i];
    if (len+word.length > maxWidth) {
      ary.push(line.slice(0));
      line=[word, ' '];
      len=word.length+1;
    } else {
      line.push(word);
      line.push(' ');
      len+=word.length+1;
    }
  }
  if (line) ary.push(line.slice(0));

  // add padding
  for (let rowIdx=0; rowIdx<ary.length-1; rowIdx++) {
    let row = ary[rowIdx]
    if (row.length < 3) {

      let str=row.join('');
      let padding = maxWidth-str.length;
      if (padding<0) row.pop();
      while (padding>0) {
        row[1] += ' ';
        padding--;
      }
    } else {
      row.pop();
      let str=row.join('');
      let padding = maxWidth-str.length;
      let idx=1;
      while (padding>0) {
        row[idx] += ' ';
        padding--;
        idx = (idx+2)%(row.length-1);
      }
    }
  }

  // last row is special
  let last=ary[ary.length-1];
  let str=last.join('');
  let padding = maxWidth-str.length;
  if (padding<0) last.pop();
  while (padding>0) {
    last[last.length-1] += ' ';
    padding--;
  }

  
  // join arrays and return
  ary = ary.map(row => { return row.join(''); });
  return ary;
};
