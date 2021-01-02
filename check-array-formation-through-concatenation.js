/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */

// O(n^2)
// S(1)
const canFormArray = (arr, pieces) => {
    let loop = true;
    let arry = arr;

    while (loop) {
        loop = false;
        
        // loop through
        // if first n elements matches arr remove n elements
        for (let i=0; i<pieces.length; i++) {
            let len = pieces[i].length;
            if (arry.slice(0,len).join('') === pieces[i].join('')) {
                arry = arry.slice(len, arry.length);
                pieces.splice(i, 1);
                loop = true;
                break;
            }
        }
        
        if (pieces.length === 0) return true;
    }
    
    return false;
};
