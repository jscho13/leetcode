/**
 * @param {number[][]} intervals
 * @return {boolean}
*/
// Attempt 2
// O(nlogn)
// S(logn)
const canAttendMeetings = (intervals) => {
    let sorted = intervals.sort((a, b) => {
        if (a[0]===b[0]) return a[1]-b[1];
        return a[0]-b[0];
    })
    
    while (sorted.length > 1) {
        let int = sorted.shift();
        if (int[1] > sorted[0][0]) return false;
    }
    
    return true;
};
