function mergeIntervals(intervals) {
  intervals = intervals.sort(function(a, b) {
    return a['startTime'] - b['startTime'];
  });
  let ranges = [];
  for (var i=0; i<intervals.length; i++) {
    for (var j=0; j<ranges.length; j++) {
      if (overlapping(intervals[i], ranges[j])) {
        ranges[j] = merge(intervals[i], ranges[j]);
        break;
      }
    }

    if (j === ranges.length) ranges = ranges.concat(intervals[i]);
  }

  return ranges;
}

function overlapping(a, b) {
  return (a['endTime'] >= b['startTime'] && a['startTime'] <= b['endTime']);
}

function merge(a, b) {
  const merged = { startTime: null, endTime: null };
  merged['startTime'] = (a['startTime'] <= b['startTime']) ? a['startTime'] : b['startTime'];
  merged['endTime'] = (a['endTime'] >= b['endTime']) ? a['endTime'] : b['endTime'];
  return merged;
}


const times = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
];
const times2 = [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]
const times3 = [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]
const times4 = [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
];

console.log(mergeIntervals(times));
console.log(mergeIntervals(times2));
console.log(mergeIntervals(times3));
console.log(mergeIntervals(times4));
