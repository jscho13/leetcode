/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  if (nums1 === []) return [];
  if (nums2 === []) return nums1.map(function() { return 1; });
  
  var ans = [];
  // go through array 1 and find partner in num2
  for(var i=0; i<nums1.length; i++) {
    for(var i2=0; i2<nums2.length; i2++) {

      if (nums1[i] === nums2[i2]) {
        // search for first number greater than num1 partner
        var tmpAry = nums2.slice(i2+1, nums2.length+1);
        var matched = false;
        // find +1 of that number
        if (tmpAry === []) ans.push(-1);
        for(var t=0; t<tmpAry.length; t++) {
          if (nums2[i2] < tmpAry[t]) {
            ans.push(tmpAry[t]);
            matched = true;
            i2 = nums2.length;
            break;
          }
        }
        if (matched == false) ans.push(-1);
      }
      
    }
  }
  return ans;
}

// O(M+N) Solution: https://leetcode.com/problems/next-greater-element-i/discuss/97638/JavaScript-Solution2-O(M%2BN)
// It's creating a map from ary2, and then just plugging in ary1 into the map.
// It does this by taking advantage of the fact that we only look to the right of the current index
// It looks at the top value in the stack, sees if there's a greater value, and adds it to the map
// After each iteration it pushes a new value onto the top of the stack
// At the end all the leftovers are given a map of -1

// var nextGreaterElement = function(findNums, nums) {
//     let numStack = [nums[0]];
//     let numsMap = new Map();
//     for(let i=1; i<nums.length; ++i) {
//       console.log('Next iteration: ' + i);
//       console.log(nums[i]);
//       console.log('Stack: ' + numStack);
//       console.log('Top Value: ' + numStack[numStack.length - 1]);
//       while (numStack.length > 0 && numStack[numStack.length - 1] < nums[i]) {
//         numsMap.set(numStack[numStack.length - 1],nums[i]);
//         numStack.pop();
//       }
//       numStack.push(nums[i]);
//       console.log(numsMap);
//     }
//     while(numStack.length > 0) {
//       numsMap.set(numStack[numStack.length - 1], -1);
//       numStack.pop();
//     }
//     console.log(numsMap);
//     return findNums.map(item => numsMap.get(item));
// };
// 
// console.log(nextGreaterElement([4,1,2],[1,3,4,2]));
