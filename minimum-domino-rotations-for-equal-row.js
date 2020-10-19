/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

// Attempt 2
// O(n)
const minDominoRotations = (A, B) => {
    const top = A[0];
    const bot = B[0];
    let topS = true;
    let botS = true;
    let aTopC = 0;
    let aBotC = 0;
    let bTopC = 0;
    let bBotC = 0;
    
    // we want to keep track of
    for (let i=0; i<A.length; i++) {
        // 1. is there a set A
        // 2. is there a set B
        if (A[i] !== top && B[i] !== top) topS = false;
        if (A[i] !== bot && B[i] !== bot) botS = false;

        // 3. number of A[0] and B[0]
        if (A[i] === top) aTopC++;
        if (B[i] === top) aBotC++;
        if (A[i] === bot) bTopC++;
        if (B[i] === bot) bBotC++;
    }

    // at end
    if (topS && botS) {
        // 2 2 2 1 2
        // 1 1 1 2 1

        // 2 2 1 1 2
        // 2 2 2 2 1
        return A.length-Math.max(aTopC, aBotC, bTopC, bBotC);
    } else if (topS || botS) {
        // if there is a set, pick the higher (length - A/B[0])
        // 2 4 1 3 2
        // 1 2 2 2 1

        // 1 2 1 1 2
        // 2 2 2 2 1

        // 2 2 1 5 1
        // 1 2 2 2 2

        // 1 2 2 2 2
        // 2 2 1 5 1
        if (topS) {
            return A.length-Math.max(aTopC, aBotC);
        } else {
            return A.length-Math.max(bTopC, bBotC);
        }
    } else {
        // if theres no set return -1
        return -1;
    }
};



// Doesn't work... time limit exceeded
const minDominoRotations = function(A, B) {
  let min = Number.POSITIVE_INFINITY;
 
  const flip = (idx, count) => {
    if (A.every(val => { return val === A[0] })
       || B.every(val => { return val === B[0] }))
      min = Math.min(min, count);
    
    for (let j=idx; j<A.length; j++) {
      [A[j], B[j]] = [B[j], A[j]];
      count++;
      flip(j+1, count);
      [B[j], A[j]] = [A[j], B[j]];
      count--;
    }
  }
  
  for (let i=0; i<A.length; i++) {
    flip(i, 0);
  }
  
  return (min === Number.POSITIVE_INFINITY) ? -1 : min;
};
