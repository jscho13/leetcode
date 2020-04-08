// honestly I think old solution was better
// New
const firstUniqChar = (s) => {
  let dict = {};
  for (let i=0; i<s.length; i++) {
    if (dict[s[i]] === undefined ) {
      dict[s[i]] = i;
    } else {
      dict[s[i]] = null;
    }
  }
  
  let values = Object.values(dict).filter(x => { return x != null });
  return values.length === 0 ? -1 : Math.min(...values);
};


// Old
var firstUniqChar = function(s) {
  var hash = {};
  for (var i=0; i<s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = [i];  
    } else {
      hash[s[i]].push(i);
    }
  }
  for (var key in hash) if (hash[key].length === 1) return hash[key][0];
  return -1;
};
