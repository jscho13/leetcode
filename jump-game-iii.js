/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
// O(n)
// S(n)
const canReach = (arr, start) => {
    let q = [start];
    let len = arr.length;
    
    while (q.length) {
        let spot = q.shift();
        if (arr[spot] === 0) return true;
        if (arr[spot] > 0) {
            if (spot+arr[spot]<len) {
                q.push(spot+arr[spot]);
            }
            if (spot-arr[spot]>=0) {
                q.push(spot-arr[spot]);
            }
            arr[spot] = -1;
        }
    }
    
    return false;
};
