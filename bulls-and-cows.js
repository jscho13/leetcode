/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

const getHint = (secret, guess) => {
  let [g,s,b,c] = [{}, {}, 0, 0];

  for (let i=0; i<secret.length; i++) {
    let glet = guess[i];
    let slet = secret[i];

    if (glet === slet) b++;
    if (s[glet]) {
      c++;
      s[glet]--;
    } else {
      g[glet] = g[glet]+1 || 1;
    }

    if (g[slet]) {
      c++;
      g[slet]--;
    } else {
      s[slet] = s[slet]+1 || 1;
    }
  }

	return `${b}A${c}B`;
};

