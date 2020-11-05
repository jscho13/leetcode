/**
 * @param {number[]} position
 * @return {number}
 */
// O(n)
// S(1)
const minCostToMoveChips = (position) => {
    let odd = 0;
    let even = 0;
    for (let i=0; i<position.length; i++) {
        let num = position[i];
        (num%2 === 0) ? even++ : odd++;
    }
    
    return Math.min(odd, even);
};
