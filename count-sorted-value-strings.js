/**
 * @param {number} n
 * @return {number}
 */
// O(n)
// S(n*5)
const countVowelStrings = (n) => {
    let ans = 0;
    let memo = new Array(n+1);
    for (let i=0; i<memo.length; i++) memo[i] = new Array(6).fill(0);

    const count = (n, chr) => {
        if (n === 1) return chr;
        if (memo[n] && memo[n][chr]) {
            return memo[n][chr];
        } else {
            let last = chr;
            while (chr) {
                let res = count(n-1, chr);
                memo[n][last] += res;
                chr--;
            }
            return memo[n][last];
        }
    }
    
    return count(n, 5);
};
