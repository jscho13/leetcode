/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// O(n*m)
// S(1)

const count = (row, col, board) => {
    let total = 0;
    let directions = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    for (let dir=0; dir<directions.length; dir++) {
        let d=directions[dir];
        if (board[row+d[0]] && Math.abs(board[row+d[0]][col+d[1]]) === 1) total++;
    }
    return total;
}

const gameOfLife = (board) => {
    for (let r=0; r<board.length; r++) {
        for (let c=0; c<board[0].length; c++) {
            let neighbors = count(r,c,board);
            if (board[r][c]===1 || board[r][c]===-1) {
                // Any live cell with fewer than two live neighbors dies
                // Any live cell with more than three live neighbors dies
                if (neighbors < 2 || neighbors > 3) board[r][c] = -1;
            } else {
                // Any dead cell with exactly three live neighbors becomes a live cell
                if (neighbors===3) board[r][c] = 2;
            }
        }
    }
        
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[i].length; j++) {
            if (board[i][j]<0) board[i][j] = 0;
            if (board[i][j]===2) board[i][j] = 1;
        }
    }
    return board;
};
