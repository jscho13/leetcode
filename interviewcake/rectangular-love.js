

function findRectangularOverlap(rect1, rect2) {
	let rect1l = rect1.leftX;
	let rect1r = rect1.leftX + rect1.width;
	let rect2l = rect2.leftX;
	let rect2r = rect2.leftX + rect2.width;

  let width, leftX, bottomY, height;
	if (rect1l <= rect2l && rect2l <= rect1r) {
    leftX = rect2l;
    if (rect2r <= rect1r) {
      width = rect2.width;
    } else {
      width = rect1r-rect2l;
    }
  } else if (rect2l <= rect1l && rect1l <= rect2t) {
    leftX = react1l;
    if (rect1r <= rect2r) {
      width = rect1.width;
    } else {
      width = rect2r-rect1l;
    }
  }

	let rect1b = rect1.bottomY;
	let rect1t = rect1.bottomY + rect1.height;
	let rect2b = rect2.bottomY;
	let rect2t = rect2.bottomY + rect2.height;

	if (rect1b <= rect2b && rect2b <= rect1t) {
    bottomY = rect2b;
    if (rect2t <= rect1t) {
      height = rect2.height;
    } else {
      height = rect1t-rect2b;
    }
  } else if (rect2b <= rect1b && rect1b <= rect2t) {
    bottomY = teact1b;
    if (rect1t <= rect2t) {
      height = rect1.height;
    } else {
      height = rect2t-rect1b;
    }
  }

  if (leftX && bottomY && width && height) return { leftX, bottomY, width, height };
  return { leftX: null, bottomY: null, width: null, height: null };
}


















// Tests

let desc = 'overlap along both axes';
let rect1 = { leftX: 1, bottomY: 1, width: 6, height: 3 };
let rect2 = { leftX: 5, bottomY: 2, width: 3, height: 6 };
let actual = findRectangularOverlap(rect1, rect2);
let expected = { leftX: 5, bottomY: 2, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = 'one rectangle inside another';
rect1 = { leftX: 1, bottomY: 1, width: 6, height: 6 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 3, bottomY: 3, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = 'both rectangles the same';
rect1 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
rect2 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 2, bottomY: 2, width: 4, height: 4 };
assertObjectEquals(actual, expected, desc);

desc = 'touch on horizontal edge';
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 2, bottomY: 6, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'touch on vertical edge';
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 4, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'touch at a corner';
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'no overlap';
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 4, bottomY: 6, width: 3, height: 6 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

function assertObjectEquals(a, b, desc) {
  const objectA = JSON.stringify(a, Object.keys(a).sort());
  const objectB = JSON.stringify(b, Object.keys(b).sort());
  if (objectA !== objectB) {
    console.log(`${desc} ... FAIL: ${objectA} != ${objectB}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}
