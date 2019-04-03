var Trie = function() {
  this.trie = {};
  this.traverse = function(s) {
    var hash = this.trie;
    for (var c=0; c<s.length; c++) {
      var ch = s[c];
      if (!hash[ch]) return false;
      hash = hash[ch];
    }
    return hash;
  }
};

Trie.prototype.insert = function(word) {
  var trie = this.trie;
  for (var c=0; c<word.length; c++) {
    var ch = word[c];
    if (!trie[ch]) {
      trie[ch] = {};
      trie = trie[ch];
    } else {
      trie = trie[ch];
    }
    if (c === word.length-1) trie[word] = true;
  }
};

Trie.prototype.search = function(word) {
  var node = this.traverse(word);
  if (node[word] === true) return true;
  return false;
};

Trie.prototype.startsWith = function(prefix) {
  var node = this.traverse(prefix);
  if (!node) return false;
  return true;
};
