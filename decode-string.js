// Attempts: 4
/**
 * @param {string} s
 * @return {string}
 */
// O(n)
// S(n)
const decodeString = (s) => {
    let q = [];

    for (let i=0; i<s.length; i++) {
        let ch = s[i];
        if (ch === ']') {
            let substr = '';
            while (q[q.length-1] != '[') {
                let item = q.pop();
                substr = `${item}${substr}`;
            }
            q.pop(); // gets rid of trailing [

            // calculate count
            let count = '';
            while (!isNaN(q[q.length-1])) {
                let num = q.pop();
                count = `${num}${count}`;
            }
            
            let str = '';
            let parsed = parseInt(count);
            while (count>0) {
                str += substr;
                count--;
            }
            q.push(str);
        } else {
            q.push(ch);
        }
    }
    
    return q.join('');
};




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



