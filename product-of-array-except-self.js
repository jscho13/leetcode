/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  let fwrd=[nums[0]];
  for (let i=1; i<nums.length; i++) {
    fwrd.push(fwrd[i-1]*nums[i]);
  }
  
  let reverse = nums.reverse();
  let back=[reverse[0]];
  for (let j=1; j<reverse.length; j++) {
    back.push(back[j-1]*reverse[j]);
  }
  back = back.reverse();

  for (let x=0; x<nums.length; x++) {
    let left = (fwrd[x-1] !== undefined) ? fwrd[x-1] : 1;
    let right = (back[x+1] !== undefined) ? back[x+1] : 1;
    nums[x] = left * right;
  }

  return nums;
};
