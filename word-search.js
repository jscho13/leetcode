/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// O(n*m+4^s)
// S(s)
const exist = (board, word) => {
  let dirs = [[1,0],[-1,0],[0,1],[0,-1]]; // N S E W
  
  const bt = (idx, y, x) => {
    if (idx === word.length) return true;
    if (board[y] && word[idx] === board[y][x]) {
      let temp = board[y][x];
      board[y][x] = null;
      for (let d=0; d<dirs.length; d++) {
        let exists = bt(idx+1, y+dirs[d][0], x+dirs[d][1]);
        if (exists) return true;
      }
      board[y][x] = temp;
    }
  }
  
  for (let i=0; i<board.length; i++) {
    for (let j=0; j<board[i].length; j++) {
      if (bt(0, i, j)) return true;
    }
  }

  return false;
};
