/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  var shift = 0;
  var l = s.length;
  var reverse = s.split('').reverse().join('');

  // check here if it's already a plaindrome
  var palindrome = true;
  for (var i=0; i<l/2; i++) {
    if (s[i] !== s[l-i-1]) {
      palindrome = false;
    }
  }
  if (palindrome) return s;

  // The trick is to start with the reverse (since that by nature is the worst case)
  // And shift the original string once to the right to act like we've appended a character
  // Once you get a match, you know that section is a palindrome and the rest need to be appended
  for (var i=1; i < s.length; i++) {
    if (s.slice(0, l-i) === reverse.slice(i, l)) {
      shift = i;
      break;
    }
  }

  var remainder = reverse.slice(0, shift);
  return remainder + s;
};
