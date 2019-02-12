/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function findKthLargest(nums, k) {
  nums = mergeSort(nums)

  for(var i=0; i<nums.length; i++) {
    if (k == i) break;
    ans = nums[i];
  }
  return ans;
}

function mergeSort(arry) {
  if (arry.length == 1) return arry;
  var mid = Math.floor(arry.length/2);
  var left = arry.slice(0, mid);
  var right = arry.slice(mid, arry.length)
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var merged = [];
  var lidx = 0;
  var ridx = 0;
  while (left.length > 0 && right.length > 0) {
    left[0] >= right[0] ? merged.push(left.shift()) : merged.push(right.shift());
  }

  if (left.length > 0) merged = merged.concat(left);
  if (right.length > 0) merged = merged.concat(right);
  return merged;
}
