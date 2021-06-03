/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = (nums) => {
    let dp = [];
    let count = [];

    for (let i=0; i<nums.length; i++) {
        let max = 1;

        for (let j=0; j<i; j++) {
            if (nums[i] > nums[j]) {
                max = Math.max(dp[j], max);
            }
        }
        
        dp[i] = max+1;
        count[max] = count[max]+1 || 1;
    }
    
    return count[count.length-1];
};
