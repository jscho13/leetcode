var dominantIndex = function(nums) {
  // obvious intution is to sort and compare the last two elements - but that's too easy: O(nlogn), O(1)
  // other way is to loop through it once and find the two largest numbers: O(n), O(1)
  
  var [max, stale] = [0,0];
  var idx = [0,0];
  for (var i=0; i<nums.length; i++) {
    if (nums[i] > max) {
      stale = max;
      idx[1] = idx[0];
      
      max = nums[i];
      idx[0] = i;
    } else if (nums[i] > stale) {
      stale = nums[i];
      idx[1] = i;
    }
  }

  if (max/2 >= stale) return idx[0];
  return -1;
};
