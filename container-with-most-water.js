/**
 * @param {number[]} height
 * @return {number}
 */

const maxArea = (height) => {
  let l=0;
  let r=height.length-1;
  let min = Math.min(height[l], height[r]);
  let ans=min*(r-l);
  
  while (l<r) {
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
    min = Math.min(height[l], height[r]);
    ans = Math.max(ans, min*(r-l));
  }
  
  return ans;
};
