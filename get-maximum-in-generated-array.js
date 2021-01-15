/**
 * @param {number} n
 * @return {number}
 */
// Tabulation
// O(n)
// S(n)
const getMaximumGenerated = (n) => {
    let i=0;
    let ary=[0,1];
    let max=0;
    while (i<=n) {
        ary[2*i]=ary[i];
        ary[2*i+1]=ary[i]+ary[i+1];
        max = Math.max(max, ary[i]);
        i++;
    }
    
    return max;
};
