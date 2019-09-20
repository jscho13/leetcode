
// Attempts: 4

// the simple answer would be parseInt(string, 2) -> binary
// binary would be (binary >>> 0).toString(2)

const addBinary = (a, b) => {
  a = a.split('').map(x => parseInt(x));
  b = b.split('').map(x => parseInt(x));
  let ans = [];
  let carry = 0;
  
  while (a.length || b.length) {
    let num1 = a.pop() || 0;
    let num2 = b.pop() || 0;
    let sum = num1+num2+carry;
    switch (sum) {
      case 0:
        ans.unshift(0);
        carry = 0;
        break;
      case 1:
        ans.unshift(1);
        carry = 0;
        break;
      case 2:
        ans.unshift(0);
        carry = 1;
        break;
      case 3:
        ans.unshift(1);
        carry = 1;
        break;
    }
  }
  
  if (carry) ans.unshift(1);
  return ans.join('');
};
