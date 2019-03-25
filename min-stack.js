var MinStack = function() {
  this.stack = [];
};

MinStack.prototype.push = function(x) {
  var idx = this.stack.length;
  this.stack[idx] = x;
};

MinStack.prototype.pop = function() {
  var idx = this.stack.length-1;
  this.stack.splice(idx, 1);
};

MinStack.prototype.top = function() {
  var idx = this.stack.length-1;
  return this.stack[idx];
};

MinStack.prototype.getMin = function() {
  var temp = this.stack.slice();
  temp.sort(function(a,b) { return a-b; });
  return temp[0];
};
