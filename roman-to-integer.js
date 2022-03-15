/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    let sum = 0;
    const romanDict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    
    // loop through string
    for (let i=0; i<s.length; i++) {
        // look at 2 elements
        let head = romanDict[s[i]];
        let tail = romanDict[s[i+1]];
        if (head >= tail || tail === undefined) {
           // first element > second element
           // add first element value normally
           sum += head; 
            
        } else {
           // if second element > first element
           // add the subtracted value, and increment by 1
           sum += (tail-head); 
           i++;
        }
    }
    
    return sum;
};
