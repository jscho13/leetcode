var totalFruit = function(tree) {
  var basket = {};
  var counter = 0;
  var l=0;
  var ans=0;

  for (var r=0; r<tree.length; r++) {
    var ch = tree[r];
    if (basket[ch] === undefined) {
      basket[ch] = 1;
      counter++;
    } else {
      basket[ch]++;
    }
    
    while (counter === 3) {
      var lCh = tree[l];
      basket[lCh]--;
      if (basket[lCh] === 0) {
        counter--;
        delete basket[lCh];
      }
      l++;
    }
    
    var sum = 0;
    for (var key in basket) sum += basket[key];
    ans = Math.max(sum, ans);
  }
  
  return ans;
};
