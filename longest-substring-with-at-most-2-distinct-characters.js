/**
 * @param {string} s
 * @return {number}
 */
// O(n)
// S(1)
const lengthOfLongestSubstringTwoDistinct = (s) => {
    let q={};
    let l=0;
    let r=0;
    let ans=0;
    let total=0;
    
    while (r < s.length) {
        let cr = s[r];
        q[cr] = q[cr]+1 || 1;
        if (q[cr] === 1) {
            total++;
            
            while (total > 2) {
                let cl = s[l];
                q[cl]--;
                if (q[cl] === 0) total--;
                l++;
            }
        }
        r++;
        ans = Math.max(ans, r-l);
    }
    
    return ans;
};
