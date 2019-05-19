
const unsortedScores = [37, 89, 41, 41, 65, 91, 53, 100];
const HIGHEST_POSSIBLE_SCORE = 100;

function sortScores(scores, topScore) {
  let list = new Array(topScore+1).fill(0);
  for (let i=0; i<scores.length; i++) {
    list[scores[i]]++;
  }

  let sorted = [];
  for (let j=0; j<list.length; j++) {
    while (list[j] > 0) {
      sorted.push(j);
      list[j]--;
    }
  }

  return sorted;
}

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
