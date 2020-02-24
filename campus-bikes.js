/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */

// Tried this with map... all the getters is slower
// It's faster to do it with an array instead of object
const assignBikes = (w, b) => {
  let options = [];
  for (let i=0; i<w.length; i++) {
    for (let j=0; j<b.length; j++) {
      let map = new Map;
      let dist = Math.abs(w[i][0] - b[j][0]) +
      Math.abs(w[i][1] - b[j][1]);
      options.push([dist, i, j]);
    }
  }
  
  options.sort((a,b) => {
    return a[0] - b[0]||a[1] - b[1]||a[2] - b[2];
  });

  let ans=[];
  for (let o=0; o<options.length; o++) {
    let opt = options[o];
    let w1 = opt[1];
    let b1 = opt[2];

    if (w[w1] !== null && b[b1] !== null) {
      ans[w1] = b1;
      w[w1] = null;
      b[b1] = null;
    }
  }
  
  return ans;
};

// If you use bucket sort you don't need to sort by worker/bike
// Just an interesting observation
