// Implement methods to track the max, min, mean, and mode

class TempTracker {
	constructor() {
    this.obj = {
      max: Number.NEGATIVE_INFINITY,
      min: Number.POSITIVE_INFINITY,
      sum: 0,
      count: 0,
      modeCount: 0,
      mode: null
    };
  }

  insert(temperature) {
		if (this.getMax() < temperature) {
      this.obj.max = temperature;
    }

		if (this.getMin() > temperature) {
      this.obj.min = temperature;
    }

    this.obj.sum += temperature;
    this.obj.count++;
    this.obj[temperature] = this.obj[temperature]+1 || 1;
    if (this.obj[temperature] > this.obj.modeCount) {
      this.obj.mode = temperature;
      this.obj.modeCount = this.obj[temperature];
    }
  }

  getMax() {
    return this.obj.max;
  }

  getMin() {
    return this.obj.min;
  }

  getMean() {
    return this.obj.sum/this.obj.count;
  }

  getMode() {
    return this.obj.mode;
  }
}

















// Tests

const t = new TempTracker();

// Step 1
t.insert(50);
assertEquals(t.getMax(), 50, 'step 1 - max');
assertEquals(t.getMin(), 50, 'step 1 - min');
assertEquals(t.getMean(), 50, 'step 1 - mean');
assertEquals(t.getMode(), 50, 'step 1 - mode');

// Step 2
t.insert(80);
assertEquals(t.getMax(), 80, 'step 2 - max');
assertEquals(t.getMin(), 50, 'step 2 - min');
assertEquals(t.getMean(), 65, 'step 2 - mean');
assertEquals(t.getMode() === 50 || t.getMode() === 80, true, 'step 2 - mode');

// Step 3
t.insert(80);
assertEquals(t.getMax(), 80, 'step 3 - max');
assertEquals(t.getMin(), 50, 'step 3 - min');
assertEquals(t.getMean(), 70, 'step 3 - mean');
assertEquals(t.getMode(), 80, 'step 3 - mode');

// Step 4
t.insert(30);
assertEquals(t.getMax(), 80, 'step 4 - max');
assertEquals(t.getMin(), 30, 'step 4 - min');
assertEquals(t.getMean(), 60, 'step 4 - mean');
assertEquals(t.getMode(), 80, 'step 4 - mode');

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
