/**
 * @param {number[]} A
 * @return {number}
 */
// O(n)
// S(1)
const longestMountain = (A) => {
    // up, down
    let dirs = [0,0];
    let count = 0;
    let max = count;

    for (let i=0; i<A.length; i++) {
        if (dirs[0] && dirs[1]) max = Math.max(max, count);
        if (A[i]<A[i+1]) { // going up    
            if (dirs[0] === 0) count = 1;
            if (dirs[1]) count = 1;

            dirs[0] = 1;            
            dirs[1] = 0;
            count++;
        } else if (A[i]>A[i+1]) { // going down
            if (dirs[0]) count++;
            dirs[1] = 1;
        } else { // flat
            dirs = [0,0];
            count = 0;
        }
    }
    
    return max;
};
