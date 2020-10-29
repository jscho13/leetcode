/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
    let ans = [];
    
    while (nums.length) {
        let num = nums.shift();
        let last = num;
        
        while (nums[0] === last+1) {
            last = nums[0];
            nums.shift();
        }
        
        (num === last) ? ans.push(`${num}`) : ans.push(`${num}->${last}`);
    }
    
    return ans;
};
