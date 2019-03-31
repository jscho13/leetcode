// Obvious choice is to sort first, and work your way backwards
// But for practice lets do the two pointer technique instead

var minSubArrayLen = function(s, nums) {
  if (nums.length === 0) return 0;
  // go through nums, drop a pointer where the sum index starts
  // when the sum goes over, move the sum pointer to the right as well
  var ans = Infinity;
  var sum = 0;
  var p2 = 0;
  for (var p1=0; p1<nums.length; p1++) {
    sum = nums[p1]+sum;
    while (sum >= s) {
      var diff = p1-p2+1;
      ans = Math.min(diff, ans);

      sum = sum - nums[p2];
      p2++;
    }
  }
  return (ans === Infinity) ? 0 : ans;
};

// Time: O(n)
// Space: O(1)
