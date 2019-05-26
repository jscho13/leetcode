
function productOf3(nums) {
  let [min, max] = [[nums[0]], [nums[0]]];

  for (let i=1; i<nums.length; i++) {
    let n = nums[i];
    max = insertMax(max, n)
    min = insertMin(min, n)
  }

  if (min[0] * min[1] > max[0] * max[1]) {
    max[0] = min[0];
    max[1] = min[1];
  }

  return max.reduce((a,b) => a*b)
}

function insertMax(max, n) {
  let newMax = [];
  let inserted = false;
  for (let j=max.length; j>0; j--) {
    let num = max[j-1];
    if (n>num && inserted == false) {
      newMax.unshift(n);
      newMax.unshift(num);
      inserted = true;
    } else {
      newMax.unshift(num);
    }
  }
  if (inserted == false) newMax.unshift(n);
  if (newMax.length > 3) newMax.shift();
  return newMax;
}

function insertMin(min, n) {
  if (min.length === 0) {
    min.push(n);
  } else if (min.length === 1) {
    (n < min[0]) ? min.unshift(n) : min.push(n);
  } else if (n < min[0]) {
    min.unshift(n);
    min.pop();
  } else if (n < min[1]) {
    min[1] = n;
  }
  return min;
}

console.log(productOf3([1,2,3,5])); // 30
console.log(productOf3([1,-2,-3,5])); // 30
