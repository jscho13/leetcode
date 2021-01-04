/**
 * @param {number} num
 * @return {boolean}
 */
// Memoization
// O(n)
// S(n)
const isUgly = (num) => {
    if (num === 0) return false;
    let memo = [];
    
    const grabVal = (n) => {
        if (n === 1 || n === 2 || n === 3 || n === 5) {
            return true;
        }

        if (memo[n]) {
            return memo[n];
        } else if (n%2 === 0) {
            memo[n] = grabVal(n/2);
        } else if (n%3 === 0) {
            memo[n] = grabVal(n/3);
        } else if (n%5 === 0) {
            memo[n] = grabVal(n/5);
        }

        return memo[n] || false;
    }
    
    return grabVal(num);
};


// Tabulation
// O(n)
// S(n)
// Acutally this doesn't work, especially if n is a huge number like 21467whatever billion
const isUgly = (num) => {
    if (num === 0) return false;
    if (num < 0) return false;
    let memo = [];
    for (let n=1; n<=num; n++) {
        if (n === 1 || n === 2 || n === 3 || n === 5) {
            memo[n] = true;
        } else if (n%2 === 0) {
            memo[n] = memo[n/2];
        } else if (n%3 === 0) {
            memo[n] = memo[n/3];
        } else if (n%5 === 0) {
            memo[n] = memo[n/5];
        } else {
            memo[n] = false;
        }
    }

    return memo[num];
};

