
function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(list) {
  for (let j=0; j<list.length; j++) {
    let i = getRandom(j, list.length-1);
    list.unshift(list.splice(i, 1)[0]);
  }

  return list;
}

console.log(shuffle([1,2,3,4,5]));
