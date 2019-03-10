/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var pl = {};
  var max = 0;
  for (var i=0; i<nums.length; i++) {
    if (nums[i] === 1 && pl['s'] === undefined) {
      pl['s'] = i;
    } else if (nums[i] === 0) {
      if (pl['z'] === undefined) {
        pl['z'] = i;
      } else {
        pl['s'] = pl['z']+1;
        pl['e'] = undefined;
      }
    } else {
      pl['e'] = i;
    }
    
    if (pl['s'] !== undefined && pl['z'] !== undefined && pl['e'] !== undefined) {
      var diff = pl['e'] - pl['s'] + 1;
      if (diff > max) max = diff;
    }
  }
  
  if (pl['e'] === undefined) max = nums.length;
  return max;
};
