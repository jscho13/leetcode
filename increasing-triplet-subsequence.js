/**
 * @param {number[]} nums
 * @return {boolean}
 */
// O(n^2)
// S(1)
const increasingTriplet = (nums) => {
    let left = nums[0];
    
    for (let i=1; i<nums.length-1; i++) {
        let right = nums.slice(i,nums.length);
        if (left < nums[i] && nums[i] < Math.max(...right)) {
            return true;
        }
        left = Math.min(left, nums[i]);
    }
    
    return false;
};
