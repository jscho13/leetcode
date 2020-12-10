/**
 * @param {number[]} arr
 * @return {boolean}
 */
// O(n)
// Attempt 1: there is a cleaner way to do it
const validMountainArray = (arr) => {
    // find peak
    let max = Math.max(...arr);
    let peak = arr.indexOf(max);
    
    // traverse
    let [l,r,down,up] = [peak-1,peak+1,false,false];
    while (arr[l]<arr[l+1]) {
        l--;
        down = true;
    }
    while (arr[r]<arr[r-1]) {
        r++;
        up = true;
    }
    return l===-1 && r===arr.length && down && up;
};
