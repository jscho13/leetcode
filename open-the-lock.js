/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
// O(n*A^n+D)
// S(n^A+D)
// A is number of characters.... so 10 0-9
// n is number of digits... so 4
// D is all the deadends

const openLock = (deadends, target) => {
  let seen = new Set();
  for (let d=0; d<deadends.length; d++) seen.add(deadends[d]);
  if (seen.has('0000')) return -1;

  let q=[target.split('').map(x => { return parseInt(x) })];
  let turns=0;
  
  while (q.length) {
    let level = q.length;
    
    while (level) {
      let dial = q.shift();
      level--;

      for (let i=0; i<dial.length; i++) {
        // -1
        let dial2 = dial.slice(0);
        dial2[i] = ((dial2[i]+10)-1)%10;
        let str = dial2.join('');
        if (str === '0000') return turns+1;
        if (!seen.has(str)) {
          seen.add(str);
          q.push(dial2.slice(0));
        }

        // +1
        let dial3 = dial.slice(0);
        dial3[i] = (dial3[i]+1)%10;
        let str2 = dial3.join('');
        if (str2 === '0000') return turns+1;
        if (!seen.has(str2)) {
          seen.add(str2);
          q.push(dial3.slice(0));
        }
      }
    }
    turns++;
  }

  return -1;
};
