/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  var inputs = input.split('\n');
  var directory = [inputs.shift()];
  var level = 0;
  var max = 0;
  
  // if we encounter a /.w+$/ then create its path
  for (var i=0; i<inputs.length; i++) {
    // count how many levels deep each path is
    var path = inputs[i].split(/\t/);
    var levels = path.length-1;
    if (levels > level) {
      level = levels;
      directory.push(path[levels]);
    } else {
      directory.splice(levels);
      directory.push(path[levels]);
      level = levels;
    }

    if (path[levels].match(/\.\w+/g)) {
      max = Math.max(max, directory.join('/').length);
    }
  }

  if (directory[0].match(/\.\w+/g)) {
    max = Math.max(max, directory.join('/').length);
  }
  return max;
};

// Time-complexity: O(n)
// Space-complexity: O(n)
