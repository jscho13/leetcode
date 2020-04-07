/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = (interval) => {
  if (interval.length <= 1) return interval.length;
  interval.sort((a,b) => {
    if (a[0]===b[0]) return a[1]-b[1];
    return a[0]-b[0];
  });

  let rooms=[interval.shift()];
  let max = 0;
  while (interval.length) {
    let meeting = interval.shift();
    for (let i=0; i<rooms.length; i++) {
      if (rooms[i] && rooms[i][1] <= meeting[0]) {
        rooms.splice(i,1);
        i--;
      }
    }
    rooms.push(meeting);
    max = Math.max(max, rooms.length);
  }
  
  return max;
};




// Old
var minMeetingRooms = function(intervals) {
  if (intervals.length === 0) return 0;
  var intervals = intervals.sort(function(a,b) { return a.start-b.start; })
  var rooms=[{'start':intervals[0].start, 'end':intervals[0].end}];
  for (var i=1; i<intervals.length; i++) {
    var int = intervals[i];
    var iterate = rooms.length;
    for (var r=0; r<iterate; r++) {
      if (rooms[r].end<=int.start) {
        rooms[r].end = int.end;
        break;
      }
    }
    if (r === iterate) rooms.push({'start':int.start, 'end':int.end});
  }
  
  return rooms.length;
};
