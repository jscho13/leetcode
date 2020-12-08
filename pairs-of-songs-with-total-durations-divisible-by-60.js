/**
 * @param {number[]} time
 * @return {number}
 */
// O(n)
// S(1)
const numPairsDivisibleBy60 = (time) => {
    let ans = 0;
    let ary = new Array(61).fill(0);
    for (let i=0; i<time.length; i++) {
        let lookup = time[i]%60
        let rem = 60-lookup;
        if (rem === 60) rem=0;
        ans += ary[lookup];
        ary[rem]++;
    }
    return ans;
};

