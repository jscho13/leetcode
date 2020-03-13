
function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

// This is not fisher-yates shuffle, but the math seems to be okay
function shuffle(array) {
  let i=0;
  for (let i=0; i<array.length; i++) {
    let ran = getRandom(0, array.length-1);
    let temp = array[i];
    array[i] = array[ran];
    array[ran] = temp;
    i++;
  }
  return array;
}

// fisher-yates
// https://medium.com/@emctackett/fisher-yates-shuffle-randomly-shuffle-a-list-in-place-30a05b05a9cb
function shuffle2(array) {
  for (let i=0; i<array.length; i++) {
    let idx = getRandom(i, array.length-1);
    let temp = array[i];
    array[i] = array[idx];
    array[idx] = temp;
  }
  return array;
}



const sample = [1,2,3];
let dict = {};
let dict2 = {};

for (let i=0; i<700000; i++) {
  let data = shuffle(sample);
  dict[data] = dict[data] ? dict[data]+1 : 1;

  let data2 = shuffle(sample);
  dict2[data2] = dict2[data2] ? dict2[data2]+1 : 1;
}

function sortObject(o) {
  return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
}

console.log(sortObject(dict));
console.log(sortObject(dict2));
