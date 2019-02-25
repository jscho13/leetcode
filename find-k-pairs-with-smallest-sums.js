/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  var combinations = {};
  var totalVals = [];
  // create all valid combinations in hash
  for (var i=0; i<nums1.length; i++) {
    var num1 = nums1[i];
    for (var x=0; x<nums2.length; x++) {
      var num2 = nums2[x];
      var value = num1+num2;

      if (combinations[value] === undefined) {
        combinations[value] = [[num1, num2]];
      } else {
        combinations[value].push([num1, num2]);
      }
      totalVals.push(value);
    }
  }

  // sort totalVals and get first k
  totalVals = totalVals.sort(function(a,b) { return a-b });
  if (totalVals.length < k) {
    k = totalVals.length;
  } else {
    totalVals = totalVals.slice(0, k);
  }

  // loop through vals to get answer
  var ans = [];
  for (var i=0; i<k; i++) {
    var val = totalVals.shift();
    var combo = combinations[val].shift();
    ans.push(combo);
  }

  return ans;
};
