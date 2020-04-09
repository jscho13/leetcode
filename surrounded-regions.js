/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {
  let dirs=[[1,0],[-1,0],[0,1],[0,-1]];
  
  const dfs = (y,x) => {
    if (board[y][x] === 'O') {
      board[y][x]='Y';
      for (let d=0; d<dirs.length; d++) {
        let newy=y+dirs[d][0];
        let newx=x+dirs[d][1];
        if (board[newy] && board[newy][newx]) {
          dfs(newy, newx);
        }
      }
    }
  }

  for (let i=0; i<board.length; i++) {
    for (let j=0; j<board[i].length; j++) {
      if (i===0 || i===board.length-1 || j===0 || j===board[i].length-1) dfs(i,j);
    }
  }
  
  for (let i=0; i<board.length; i++) {
    for (let j=0; j<board[i].length; j++) {
      if (board[i][j]==='O') board[i][j] = 'X';
      if (board[i][j]==='Y') board[i][j] = 'O';
    }
  }
  
  return board;
};
