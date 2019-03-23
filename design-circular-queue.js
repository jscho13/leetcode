function MyCircularQueue(k) {
  this.list = new Array(k);
  this.head = undefined;
  this.tail = undefined;
  this.max = k;
};

MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false;

  if ((this.head === undefined) && (this.tail === undefined)) {
    this.head = 0;
    this.tail = 0;
    this.list[this.tail] = value;
  } else {
    // this needs to add after the tail, not at the first null value
    var i = this.tail+1;
    var j = this.head;
    while (i != j) {
      i = (i === this.max) ? 0 : i;
      if (this.list[i] === undefined) {
        this.list[i] = value;
        this.tail = i;
        break;
      } else {
        i++;
      }
    }
  }

  return true;
};

MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false;
  this.list[this.head] = undefined;
  
  if (this.isEmpty()) {
    this.head = undefined;
    this.tail = undefined;
  } else {
    this.head = (this.head+1 === this.max) ? 0 : this.head+1;
  }
  return true;
};

MyCircularQueue.prototype.Front = function() {
  var f = -1;
  if (this.head !== undefined) f = this.list[this.head];
  return f;
};

MyCircularQueue.prototype.Rear = function() {
  var r = -1;
  if (this.tail !== undefined) r = this.list[this.tail];
  return r;
};

MyCircularQueue.prototype.isEmpty = function() {
  for (var i=0; i<this.list.length; i++) {
    if (this.list[i] !== undefined) return false;
  }
  return true;
};

MyCircularQueue.prototype.isFull = function() {
 for (var i=0; i<this.list.length; i++) {
    if (this.list[i] === undefined) return false;
  }
  return true;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = Object.create(MyCircularQueue).createNew(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
