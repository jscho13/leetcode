function rand7() {
  return Math.floor(Math.random() * 7) + 1;
}

function rand5() {
  let ans = 7;
  while (ans > 5) {
    ans = rand7();
  }
  return ans;
}

let a = {};
for (let i = 0; i < 100000000; i++) {
  let ans = rand5();
  a[ans] = a[ans] ? a[ans]+1 : 1;
}
console.log(a);

