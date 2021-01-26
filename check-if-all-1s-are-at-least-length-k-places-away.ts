function kLengthApart(nums: number[], k: number): boolean {
    let count = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i]===0) {
            count++;
        } else {
            if (count<k && i !== 0) return false;
            count = 0;
        }
    }
    
    return true;
};
