/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Perfect solve
// O(n)
// S(1)

const findDisappearedNumbers = (nums) => {
	for (let i=0; i<nums.length; i++) {
    let num = Math.abs(nums[i])-1;
    if (nums[num] > 0) nums[num] *= -1; 
	}

  let ans = [];
  for (let j=0; j<nums.length; j++) if (nums[j] > 0) ans.push(j+1);
  return ans;
};

