/**
 * @param {number} n
 * @return {number}
 */
// O(n!)
// S(n)
const nextGreaterElement = (n) => {
    let num = n.toString().split('');
    let min = Number.POSITIVE_INFINITY;
    
    const bt = (ary, val) => {
        let nval = val.join('');
        if (nval > n && nval < min && nval < 2147483647) {
            min = nval;
            return;
        }
        
        for (let i=0; i<ary.length; i++) {
            val.push(ary.shift());
            bt(ary.slice(), val.slice());
            ary.push(val.pop());
        }
    }
    
    bt(num, []);
    return min === Number.POSITIVE_INFINITY ? -1 : min;
};
