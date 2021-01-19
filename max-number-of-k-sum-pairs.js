/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// O(n+k)
// S(k)
const maxOperations = (nums, k) => {
    let map = new Map();
    let ans = 0;

    for (let i=0; i<nums.length; i++) {
        let newNum = map.get(nums[i])+1 || 1;
        map.set(nums[i], newNum);
    }
    console.log(map);
    for (let [key, value] of map) {
        if (map.has(k-key)) {
            let add = Math.min(value, map.get(k-key));
            if (key === k/2) add = Math.floor(add/2);
            map.delete(key);
            map.delete(k-key);
            ans+=add;
        }
    }
    
    return ans;
};
