/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// O(n+nlogn)
// S(1)
const twoSumLessThanK = (A, K) => {
    let l=0;
    let r=A.length-1;
    let max = -1;
    A = A.sort((a,b) => { return a-b });
    
    while (l<r) {
        while (A[l]+A[r] >= K) {
            r--;
        }

        let sum = A[l]+A[r];
        if (sum < K) max = Math.max(sum, max);
        l++;
    }
    
    return max;
};
