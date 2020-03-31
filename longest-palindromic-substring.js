
// Yes the answer is down there. Don't look.

/**
 * @param {string} s
 * @return {string}
 */
 // O(n^2)
const longestPalindrome = (s) => {
  let i=0;
  let str='';

  const expand = (l,r) => {
    let max=0;
    while (s[l] === s[r] && s[l] && s[r]) {
      l--;
      r++;
      max = r-l-1;
    }
    if (max > str.length) {
      str = s.slice(l+1,r);
    }
  }
  
  while (i<s.length) {
    expand(i, i);
    expand(i, i+1);
    i++;
  }
  return str;
};



// // O(n^3)
// var longestPalindrome = function(s) {
//   var max = 0;
//   var ans = '';
//   for (var r=0; r<s.length; r++) {
//     for (var l=0; l<=r; l++) {
//       var temp = s.slice(l, r+1).split('').reverse().join('');
//       str = s.slice(l, r+1);
//       if (temp === str && (r-l) >= max) {
//         max = r-l;
//         ans = s.slice(l, r+1);
//       }
//     }
//   }
// 
//   return ans;
// };
// 
// // O(n^2)
// var longestPalindrome = function(s) {
//   var max = 0;
//   var ans = '';
//   for (var r=0; r<s.length; r++) {
//     for (var j=0; j<2; j++) {
//       var left=r;
//       var right=r+j;
//       while (s[left] && s[left] == s[right]) {
//         max = Math.max(right-left+1, max);
//         left--;
//         right++;
//       }
//       
//       if (max > ans.length) {
//         ans = s.slice(left+1, right);
//       }
//     }
//   }
//   
//   return ans;
// };
// 
// There is also an interesting DP solution with a 2D array.
// O(n^2) S(n^2)
// initialize with 1, 2 letter palindromes. then do the three letter ones
// lets say babad... it looks at both a's, and see's b one between is a palindrome. then it iterates out to
// babad. it sees aba is a palindrome but b != d so it stops. do that through the whole string


