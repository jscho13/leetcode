/**
 * @param {number} n
 * @return {number}
 */
// O(k) => k refers to number of valid permutaitons
// S(1)
const countArrangement = (n) => {
    let ans = 0;
    let ary = [];
    for (let i=1; i<=n; i++) ary.push(i);
    
    const bt = (track) => {
        if (track.length === n) ans++;
        
        for (let j=0; j<ary.length; j++) {
            track.push(ary.shift());
            let last = track.length;
            if ((last)%track[last-1] === 0 || track[last-1]%(last) === 0) bt(track);
            ary.push(track.pop());
        }
    }

    bt([]);
    return ans;
};

