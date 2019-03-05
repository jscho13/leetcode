// To achieve O(1) time-complexity you can't use indexOf
// Need to implement a double linked list
// Some idea of nodes with a prev, next, and a beg/end to push and pop from the linked list

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = {};
  this.lruQueue = [];
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache[key] === undefined) {
    return -1;
  }

  var q = this.lruQueue;
  var idx = q.indexOf(key);
  q.splice(idx, 1);
  q.push(key);

  return this.cache[key];
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.cache[key] = value;

  var q = this.lruQueue;

  var idx = q.indexOf(key);
  if (idx !== -1) {
    q.splice(idx, 1);
    q.push(key);
  } else {
    q.push(key);
  }

  var deleteKey;
  if (q.length > this.capacity) {
    deleteKey = q.shift();
  }

  delete this.cache[deleteKey];
};
