/**
 * @param {number[]} w
 */
class Solution {
  constructor(w) {
    this.max=0;
    this.weight=[];
    for (let i=0; i<w.length; i++) {
      this.max += w[i];
      this.weight.push(this.max);
    }
  }
  
  /**
   * @return {number}
   */
  pickIndex = () => {
    let randIdx = Math.floor(Math.random()*this.max);    
    for (let i=0; i<this.weight.length; i++) {
      if (randIdx < this.weight[i]) return i;
    }
    return -1;
  }
};
