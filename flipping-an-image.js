/**
 * @param {number[][]} A
 * @return {number[][]}
 */
// O(n*m)
// S(1)
const flipAndInvertImage = (A) => {
    for (let i=0; i<A.length; i++) {
        for (let j=0; j<A[i].length/2; j++) {
            [A[i][j], A[i][A.length-1-j]]= [!A[i][A.length-1-j], !A[i][j]];
        }
    }
    
    return A;
};
