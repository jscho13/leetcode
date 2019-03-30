/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var ans = [];
  var [b,t] = [0, numbers.length-1];
  var sum;
  while (b<t) {
    sum = numbers[b]+numbers[t];
    console.log(sum);
    if (sum > target) {
      t--;
    } else if (sum < target) {
      b++;
    } else {
      ans = [b+1, t+1];
      break;
    }
  }
  return ans;
};

// Time-complexity: O(n)
// Attempt: 1

// There are O(nlogn) solutions out there that use
// binary search to find the right pointers
// instead of iterating down by 1 each time
