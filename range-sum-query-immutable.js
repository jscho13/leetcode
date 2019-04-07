var NumArray = function(nums) {
  var sumArry = [0];
  var sum=0;
  for (var n=0; n<nums.length; n++) {
    sum+=nums[n];
    sumArry.push(sum);
  }
  this.sums = sumArry;
};

NumArray.prototype.sumRange = function(i, j) {
  var sum = this.sums[j+1] - this.sums[i];
  return sum;
};

