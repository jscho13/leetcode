/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Newer solution is shorter... but also not as good
// O(n)
// S(n)
const topKFrequent = (nums, k) => {
  let dict = {};
  for (let i=0; i<nums.length; i++) {
    dict[nums[i]] = dict[nums[i]]+1 || 1;
  }
  
  let ans = [];
  while (k>0) {
    let max=0;
    let num;
    for (let key in dict) {
      if (dict[key] > max) {
        max = dict[key];
        num = key;
      }
    }
    ans.push(num);
    delete dict[num];
    k--;
  }
  return ans;
};



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
    set[nums[i]] = set[nums[i]]+1 || 1;
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
