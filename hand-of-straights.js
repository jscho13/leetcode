/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */

// Attempt 3
// O(nlogn + n)
// S(n)

const isNStraightHand = (hand, W) => {
  hand.sort((a,b) => { return a-b });

  while (hand.length > 0) {
    let idx = 0;
    let num = hand.splice(idx, 1)[0];
    let set = [num];
    while (set.length < W && idx < hand.length) {
      if (hand[idx] === set[set.length-1]+1) {
        num = hand.splice(idx, 1)[0];
        set.push(num);
        idx = 0;
      } else {
        idx++;
      }
    }
    if (set.length < W) return false;
  }

  return true;
}
