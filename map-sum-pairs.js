var TrieNode = function(key, val, word) {
  this.key = null;
  this.children = [];
  this.val = val;
  this.words = [word];
}

var MapSum = function() {
  this.root = new TrieNode("", 0);
};

MapSum.prototype.insert = function(key, val) {
  var curNode = this.root;
  for (var i=0; i<key.length; i++) {
    var k = key[i].charCodeAt(0)-97;
    if (curNode.children[k]) {
      curNode = curNode.children[k];
      (curNode.words.includes(key)) ? curNode.val = val : curNode.val += val;
    } else {
      var newNode = new TrieNode(key[i], val, key);
      curNode.children[k] = newNode;
      curNode = curNode.children[k];
    }
  }
};

MapSum.prototype.sum = function(prefix) {
  var curNode = this.root;
  var sum=0;
  for (var i=0; i<prefix.length; i++) {
    var k = prefix[i].charCodeAt(0)-97;
    if (curNode.children[k]) {
      curNode = curNode.children[k];
      sum = curNode.val;
    } else {
      return 0;
    }
  }
  return sum;
};
