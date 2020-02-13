/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = (points, K) => {
  points = points.sort((a, b) => {
    return (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1]);
  });
    
  let ans = [];
  for (let i=0; i<K; i++) {
    ans.push(points[i]);
  }

  return ans;
};

// O(logn)
// S(1)
