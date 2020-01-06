//  Implement the enqueue and dequeue methods
class QueueTwoStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(item) {
    this.stack1.push(item);
  }

  dequeue() {
    if (this.stack1.length === 0 && this.stack2.length === 0) {
      throw new Error(); 
    }

    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}








// Tests
const q = new QueueTwoStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

let desc = 'dequeue #1';
let actual = q.dequeue();
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'dequeue #2';
actual = q.dequeue();
expected = 2;
assertEquals(actual, expected, desc);

q.enqueue(4);

desc = 'dequeue #3';
actual = q.dequeue();
expected = 3;
assertEquals(actual, expected, desc);

desc = 'dequeue #4';
actual = q.dequeue();
expected = 4;
assertEquals(actual, expected, desc);

desc = 'dequeue from empty queue';
const emptyDequeue = () => q.dequeue();
assertThrowsError(emptyDequeue, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}



// Old implementation... O(n) and S(n)
// there is an O(m) solution where m is # of calls
// class QueueTwoStacks {
//   constructor () {
//     this.stack1 = [];
//     this.stack2 = [];
//   }
// 
//   enqueue(item) {
//     while (this.stack1.length > 0) {
//       var num = this.stack1.pop();
//       this.stack2.push(num);
//     }
// 
//     this.stack1.push(item);
// 
//     while (this.stack2.length > 0) {
//       var num2 = this.stack2.pop();
//       this.stack1.push(num2);
//     }
//   }
// 
//   dequeue() {
//     if (this.stack1.length === 0) throw new Error('The stack is already empty');
//     return this.stack1.pop();
//   }
// }
