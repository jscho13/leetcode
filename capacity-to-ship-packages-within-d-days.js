/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
const shipWithinDays = (weights, D) => {
  let l = Math.max(...weights);
  let r = weights.reduce((acc, val) => { return acc+val });

  const split = (limit) => {
    let sum=0;
    let count=0;
    for (let i=0; i<weights.length; i++) {
      sum += weights[i];
      if (sum > limit) {
        sum = weights[i];
        count++;
      }
    }
    count++;
    return count <= D;
  }

  while (l<=r) {
    let mid = Math.floor((r+l)/2);
    let isValid = split(mid);

    if (isValid) {
      r = mid-1;
    } else {
      l = mid+1;
    }
  }

  return r+1;
};
