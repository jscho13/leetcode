/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
    let ans = [];
    let map = new Map();

    const bt = (ary, build) => {
        let key = ary.slice().join('');
        if (build.length === 0 && !map.has(key)) {
            map.set(key);
            ans.push(ary.slice());
            return;
        }
        
        let len=build.length;
        while (len) {
            ary.push(build.shift());
            bt(ary, build);
            build.push(ary.pop());
            len--;
        }
    }
    
    bt([], nums);
    return ans;
};
