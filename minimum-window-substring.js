var minWindow = function(s, t) {
  if (s.length === 0 || t.length === 0) return "";
  var dict = {};
  // create a dictionary
  for (var i=0; i<t.length; i++) {
    var char = t[i];
    if (dict[char] === undefined) {
        dict[char]=1;
    } else {
        dict[char]++;
    }
  }
  
  var smap = dict;
  var q = [];
  var minWord = '';
  for(var x=0; x<s.length; x++) {
    var char = s[x];
    // create queue of relevant chars
    if (smap[char] !== undefined) {
      var charIdx={};
      charIdx[char] = x;
      q.push(charIdx);
      smap[char]--;
      if (smap[char] < 0) [smap, q] = trimTail(smap, q);

      var validWord = true;
      for (key in smap) {
        if (smap[key] > 0) {
          validWord = false;
        }
      }

      if (validWord) {
        newWord = getWord(s, q);
        if (newWord.length < minWord.length || minWord.length == 0) {
          minWord = newWord;
        }
      }
    }
  }
  return minWord;
};

var trimTail = function(smap, queue) {
  if (Object.keys(queue[queue.length-1])[0] != Object.keys(queue[0])[0]) return [smap, queue];

  var isTail = true;
  while (isTail) {
    isTail = false;
    var head = queue.shift();
    var char = Object.keys(head)[0];
    if (smap[char] < 0) {
      smap[char]++;
      isTail = true;
    } else {
      queue.unshift(head);
    }
  }
  return [smap, queue];
}

var getWord = function(s, queue) {
  return s.slice(Object.values(queue[0])[0], Object.values(queue[queue.length-1])[0]+1);
}

console.log(minWindow('a','aa'));
