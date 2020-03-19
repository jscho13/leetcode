/**
 * @param {number[]} height
 * @return {number}
 */


// O(n)
// S(1)
const trap = (height) => {
  let ans=0;

  let max=0;
  let sum=0;
  for (let i=0; i<height.length; i++) {
    let val = height[i];
    if (val >= max) {
      ans += sum;
      max = val;
      sum = 0;
    } else {
      sum += max-val;
    }
  }
  
  let max2 = 0;
  sum = 0;
  for (let j=height.length-1; j>=0; j--) {
    let val = height[j];
    if (val >= max2) {
      ans += sum;
      max2 = val;
      sum = 0;
      if (max === max2) break;
    } else {
      sum += max2-val;
    }
  }

  return ans;
};
