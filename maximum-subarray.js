/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n)
// S(1)
const maxSubArray = (nums) => {
  let sum = 0;
  let max = Number.NEGATIVE_INFINITY;
  
  for (let i=0; i<nums.length; i++) {
    sum += nums[i];
    if (nums[i] > sum) sum = nums[i];
    if (sum > max) max = sum;
  }
  
  return max;
};

// O(n log n)
/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = (nums, left=0, right=nums.length) => {
  let subAry = nums.slice(left, right);
  if (subAry.length === 1) return subAry[0];

  const mid = Math.floor((right+left)/2);
  const l = maxSubArray(nums, left, mid);
  const r = maxSubArray(nums, mid, right);
  const sum = combine(nums, left, right, mid);
  return Math.max(l, r, sum);
}

const combine = (nums, l, r, mid) => {
  let left=nums[mid];
  let right=nums[mid+1];
  let sum=0;
  for (let i=mid; i>=l; i--) {
    sum += nums[i];
    left = Math.max(sum, left);
  }

  sum=0;
  for (let i=mid+1; i<r; i++) {
    sum += nums[i];
    right = Math.max(sum, right);
  }
  
  if (isNaN(left) && isNaN(right)) {
    return Number.NEGATIVE_INFINITY;
  } else if (isNaN(left)) {
    return right;
  } else if (isNaN(right)) {
    return left;
  } else {
    return Math.max(left, right, left+right);
  }
}


