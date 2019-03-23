function MovingAverage(size) {
  this.max = size;
  this.list = [];
};

MovingAverage.prototype.next = function(val) {
  this.list.push(val);
  if (this.list.length > this.max) this.list.shift();
  return (this.list.reduce(function(a,b){ return a+b; }))/this.list.length;
};

