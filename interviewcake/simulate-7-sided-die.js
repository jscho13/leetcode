function rand5() {
  return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}

function rand7() {
}


let a = {};
for (let i = 0; i < 100000000; i++) {
  let ans = rand7();
  a[ans] = a[ans] ? a[ans]+1 : 1;
}
console.log(a);

