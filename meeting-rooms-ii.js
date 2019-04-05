/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

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
