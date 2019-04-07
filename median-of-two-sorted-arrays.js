/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length === 0 && nums2.length === 0) return 0;
  var ans = [];
  var counter = 0;
  while (nums1.length > 0 && nums2.length > 0) {
    if (nums1[0] > nums2[0]) {
      ans.push(nums2.shift());
    } else {
      ans.push(nums1.shift());
    }
    counter++;
  }

  if (nums1.length > 0) ans=ans.concat(nums1);
  if (nums2.length > 0) ans=ans.concat(nums2);
  counter = counter + nums1.length + nums2.length;

  var median;
  if (counter % 2 === 0) {
    median = (ans[counter/2] + ans[counter/2-1])/2;
  } else {
    median = ans[Math.floor(counter/2)];
  }

  return median;
};
