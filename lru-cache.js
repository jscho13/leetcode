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
  q.splice(idx, idx+1);
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
    q.splice(idx, idx+1);
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


var obj = new LRUCache(2);
console.log(obj.put(2,1))
console.log(obj.put(1,1))
console.log(obj.put(2,3))
console.log(obj.put(4,1))
console.log(obj.get(1))
console.log(obj.get(2))

