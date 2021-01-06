/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// O(n) => you could make the case O(1) since k is a maximum of 1000
// S(1)
const findKthPositive = (arr, k) => {
    let missing = 0;
    let ans = 0;
    while (missing<k) {
        ans++;
        if (arr[0]===ans) {
            arr.shift();
        } else {
            missing++;
        }
    }
    
    return ans;
};
