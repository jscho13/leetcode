/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
// O(nlogn+n)
// S(logn)
// theres the simpler way... but here you sorted by ending cause meeting-rooms-ii scarred you
const canAttendMeetings = (intervals) => {
  if (intervals.length === 0) return true;
  
  let intv = intervals.sort((a,b) => {
    if (a[1] === b[1]) return a[0]-b[0];
    return a[1]-b[1];
  });
  
  let meeting = intv.pop();
  let start = meeting[0];
  while (intv.length) {
    meeting = intv.pop();
    if (meeting[1] > start) return false;
    start = meeting[0];
  }

  return true;
};
