var letterCombinations = function(digits) {
  if (digits === "") return [];
  var hash = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z']
  }
  
  var ans = ['']
  for (var d=0; d<digits.length; d++) {
    var queue = hash[digits[d]];

    var temp = [];
    for (var q=0; q<queue.length; q++) {
      for (var c=0; c<ans.length; c++) {
        temp.push(ans[c]+queue[q]);
      }
    }
    ans = temp;
  }
  
  return ans;
};
