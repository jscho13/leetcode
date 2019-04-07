var replaceWords = function(dict, sentence) {
  var dictTrie = {};
  var currNode;
  
  for (var i=0; i<dict.length; i++) {
    var word = dict[i];
    currNode = dictTrie;
    for (var c=0; c<word.length; c++) {
      var ch = word[c];
      currNode = currNode[ch] = currNode[ch] || {};
    }
    currNode['word'] = word;
  }

  var sentence = sentence.split(' ');
  for (var w=0; w<sentence.length; w++) {
    var word = sentence[w];
    var trieSearch = dictTrie;
    for (var c=0; c<word.length; c++) {
      if (trieSearch[word[c]]) {
        trieSearch = trieSearch[word[c]];
        if (trieSearch['word']) {
          sentence[w] = trieSearch['word'];
          break;
        }
      } else {
        break;
      }
    }
  }
  var ans = sentence.join(' ');
  return ans;
};
