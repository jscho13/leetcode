/**
 * @param {number[][]} items
 * @return {number[][]}
 */
const highFive = (items) => {
  items = items.sort((a,b) => {
    return b[1]-a[1];
  });
  
  let dict = {};
  for (let i=0; i<items.length; i++) {
    let student = items[i][0];
    let score = items[i][1];
    if (dict[student] && dict[student].length < 5) {
      dict[student].push(score);
    } else if (dict[student] === undefined) {
      dict[student] = [score];      
    }
  }
  
  let ans = [];
  for (let key in dict) {
    let avg = Math.floor(dict[key].reduce((acc,b) => {
      return acc+b;
    }, 0)/dict[key].length);
    ans.push([key, avg]);
  }
  
  return ans;
};
