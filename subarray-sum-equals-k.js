var subarraySum = function(nums, k) {
  var sum=0;
  var ans=0;
  var j=0;
  for (var i=0; i<nums.length; i++) {
    for (var j=i; j<nums.length; j++) {
      sum += nums[j];
      if (k === sum) ans++;
    }
    sum=0;
  }
  
  return ans;
};


// there's a better way to solve this with cumulative sums
// note that to get the sum between two indexs, you just subtract the left of the first index
// then the remainder is the sum of the indexes to get there
// gotta add 0 to the beginning to get the first indexs cause it not inclusive
