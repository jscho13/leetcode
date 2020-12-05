/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// O(n)
// S(n)
const kthFactor = (n, k) => {
    // get two arrays
    let divs = [];
    let res = [];

    let num = 1;
    // while int < n/2 iterate
    while (num <= n) {
        if (n%num === 0) {
            // if mod === 0 push it to first array
            divs.push(num);
        }
        num++;
    }
    
    // concat and return
    return divs[k-1] ? divs[k-1] : -1;
};
