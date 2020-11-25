/**
 * @param {string} s
 * @return {number}
 */
// Attempt 1: this was surprisingly tough
// O(n)
// S(n)
const calculate = (g) => {
    // go through and add num q and op q
    let i=0;
    let nums = [];
    let op = [];
    let s = g.replace(/\s+/g,'');

    while (i<s.length) {
        let num = '';
        while (!isNaN(s[i])) {
            num += s[i];
            i++;
        }

        // when op q hits * || /, get the next number and do the math
        let operation = op[op.length-1];
        if (operation==='/' || operation==='*') {
            let num2 = nums.pop();

            // push it back to num
            if (op.pop() === '/') {
                nums.push(Math.floor(num2/num));
            } else {
                nums.push(num2*num)
            }
        } else {
            if (num) {
                nums.push(parseInt(num));
            } else {
                op.push(s[i]);
                i++;
            }
        }
    }
    
    // at end, pop all operations and compute
    while (nums.length) {
        let num1 = nums.shift();
        let num2 = nums.shift();
        nums.unshift(num1+num2);
    }
    return Math.floor(nums[0]);
};
