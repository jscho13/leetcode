/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// Attempt 3. same as last time
const merge = (intervals) => {
    let sort = intervals.sort((a,b) => {
        if (a[0]===b[0]) return a[1]-b[1];
        return a[0]-b[0];
    });
    
    let ans = [];
    let room = sort.shift();
    
    while (sort.length) {
        let compare = sort.shift();
        if (compare[0] <= room[1]) {
            room[1] = Math.max(compare[1], room[1]);
        } else {
            ans.push(room.slice());
            room = compare;
        }        
    }
    
    ans.push(room.slice());    
    return ans;
};


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



// Attempt 1:
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
