/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// O(nlogn + n)
// S(n)
// Nice job significant improvement here
const merge = (intervals) => {
  if (intervals.length < 2) return intervals;
  intervals.sort((a,b) => { return a[0]-b[0] })
  
  let rooms = [];
  let meeting = intervals[0];
  while (intervals.length) {
    let nextMeeting = intervals.shift();
    if (nextMeeting[0] <= meeting[1]) {
      meeting[1] = Math.max(meeting[1], nextMeeting[1]);
    } else {
      rooms.push(meeting.slice(0));
      meeting = nextMeeting;
    }
  }
  rooms.push(meeting);
  return rooms;
};




/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
// Time-complexity: O(n^2)
// Space-complexity: O(n)
var merge = function(intervals) {
  if (intervals.length === 0) return [];
  intervals = intervals.sort(function(a,b) { return a.start-b.start; });
  var ans = [intervals.shift()];
  var unmatched = true;
  // iterate through intervals
  for (var i=0; i<intervals.length; i++) {
    for (var j=0; j<ans.length; j++) {
      // merge if possible
      if (contains(ans[j], intervals[i])) {
        ans[j].start = Math.min(ans[j].start, intervals[i].start);
        ans[j].end = Math.max(ans[j].end, intervals[i].end);
        intervals.splice(i, 1);
        i--;
        unmatched = false;
        break;
      }
    }
    
    (unmatched) ? ans.push(intervals[i]) : unmatched = true;
  }
  // add to interval list if not
  return ans;
};

var contains = function(src, input) {
  return (src.start <= input.end) && (src.end >= input.start)
}
