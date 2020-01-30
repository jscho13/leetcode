/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// O(n)
// S(n)

const topKFrequent = (nums, k) => {
  let set = {};

	for (let i=0; i<nums.length; i++) {
    let num = nums[i];
    if (set[num] !== undefined) {
      set[num]++;
    } else {
      set[num] = 1;
    }
	}

  let counts = [];
  for (let key in set) {
    let count = set[key];
    if (counts[count]) {
      counts[count].push(key);
    } else {
      counts[count] = [key];
    }
  }

  let ans = [];
  let count = 0;
  for (let x = counts.length-1; x>0; x--) {
    let nums = counts[x];
    if (nums) {
      ans = ans.concat(nums);
      count = count + nums.length;
    }
    
    if (count === k) return ans;
  }

  return ans;
};


// Example 1:
// 
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
// 
// Input: nums = [1], k = 1
// Output: [1]

