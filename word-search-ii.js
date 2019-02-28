/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  var ans = [];
  // iterate through words
  for (var w=0; w<words.length; w++) {
    // find matching for start point
    for (var i=0; i<board.length; i++) {
      for (var j=0; j<board[i].length; j++) {
        if (board[i][j] === words[w][0]) {
          var newBoard = board.map(function(arr) {
            return arr.slice();
          });
          if (wordSolvable(newBoard, words[w], 0, i, j)) ans.push(words[w]);
        }
      }
    }
  }
  ans = ans.filter(function(value, index){ return ans.indexOf(value) == index });
  return ans;
};

var wordSolvable = function(board1, word, interval, row, col) {
  if (interval === word.length-1) {
    return true;
  } else {
    var board = board1.map(function(arr) {
      return arr.slice();
    });

    // make value empty after visiting a character
    board[row][col] = '';

    // create all four bound options
    var [up, right, down, left] = [false, false, false, false];
    if (board[row-1] && board[row-1][col] === word[interval+1]) up = true;
    if (board[row][col+1] === word[interval+1]) right = true;
    if (board[row+1] && board[row+1][col] === word[interval+1]) down = true;
    if (board[row][col-1] === word[interval+1]) left = true;
  
    // run solve word on valid options
    var directions = [up, right, down, left];

    for (var d=0; d<directions.length; d++) {
      if (directions[d]) {
        switch (d) {
          case 0:
            if (wordSolvable(board, word, interval+1, row-1, col)) return true;
            break;
          case 1:
            if (wordSolvable(board, word, interval+1, row, col+1)) return true;
            break;
          case 2:
            if (wordSolvable(board, word, interval+1, row+1, col)) return true;
            break;
          case 3:
            if (wordSolvable(board, word, interval+1, row, col-1)) return true;
            break;
        }
      }
    }
    return false;
  }
}
