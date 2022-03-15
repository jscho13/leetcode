/**
 * @param {string} s
 * @return {number}
 */
// O(n)
// S(n)
// Note: getting pretty good at this DP stuff
const numDecodings = (s) => {
    const dict = { '1': true, '2': true, '3': true, '4': true, '5': true, '6': true, '7': true, '8': true, '9': true, '10': true, '11': true, '12': true, '13': true, '14': true, '15': true, '16': true, '17': true, '18': true, '19': true, '20': true, '21': true, '22': true, '23': true, '24': true, '25': true, '26': true }
    
    // initializes our count
    const dp = new Array(s.length).fill(0);
    dp.push(1);
    
    for (let i=s.length; i>0; i--) {
        let char = s[i-1];
        if (dict[char])  dp[i-1] += dp[i];
        if (dict[char+s[i]])  dp[i-1] += dp[i+1];
    }
    
    return dp[0];
};

