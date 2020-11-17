/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
// O(p)
// S(1)
const mirrorReflection = (p, q) => {
    let sum = q;
    let bounce = 0;
    while (sum%p != 0) {
        sum+=q;
        bounce++;
    }

    // bounce is even its right
    // bounce is odd its left
    let div = sum / p;
    if (div%2 === 0) {
        return bounce%2 === 0 ? 0 : 1;
    } else {
        return bounce%2 === 0 ? 1 : 2;        
    }
};
