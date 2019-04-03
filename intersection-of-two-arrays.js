/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var ans = [];
  var hash = {};
  for (var n1=0; n1<nums1.length; n1++) {
    if (!hash[nums1[n1]]) hash[nums1[n1]] = true;
  }
  
  for (var n2=0; n2<nums2.length; n2++) {
    if (hash[nums2[n2]]) ans.push(nums2[n2]);
  }
  
  return [...new Set(ans)];
};
