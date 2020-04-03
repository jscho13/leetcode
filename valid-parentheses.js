// O(n)
// S(n)
const isValid = (s) => {
  let [q, dict]=[[], { '}':'{', ']':'[', ')':'(' }]
  for (let i=0; i<s.length; i++) {
    (q.length && dict[s[i]] === q[q.length-1]) ? q.pop() : q.push(s[i]);
  }
  return q.length === 0;
};
