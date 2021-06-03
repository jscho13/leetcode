/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
// O(nlogm)
// S(1)
const smallestDivisor = (nums, threshold) => {
    let floor = 1;
    let ceil = Math.max(...nums);
    let ans = ceil;
    while (floor <= ceil) {
        let mid = Math.floor((floor+ceil)/2);
        let sum = nums.reduce((acc, x) => {
            return acc+Math.ceil(x/mid);
        }, 0);

        if (sum > threshold) { // div can be increased
            floor = mid+1;
        } else { // div can be decreased
            ans = Math.min(ans, mid);
            ceil = mid;
        }
    }
    
    return ans;
};
