
// Attempts: 3

function decodeString(s) {
  var stack = [];
  for (var i=0; i<s.length; i++) {
    if (!isNaN(s[i])) {
      var num = '';
      while (!isNaN(s[i])) {
        num+=s[i];
        i++;
      }
      stack.push(parseInt(num));
      i--;
    } else if (s[i] === '[') {
      stack.push(s[i]);
    } else if (s[i] === ']') {
      var str = '';
      var letter = stack.pop();
      while (letter !== '[') {
        str = letter + str;
        letter = stack.pop();
      }
      var num = stack.pop();
      var res = '';
      for (var r=0; r<num; r++) {
        res += str;
      }
      stack.push(res);
    } else {
      stack.push(s[i]);
    }
  }

  var ans = stack.join('');
  return ans;
}

