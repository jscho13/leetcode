/**
 * Initialize your data structure here.
 */
class HitCounter {
  constructor() {
    this.ary = [];
  }
  
  /**
   * Record a hit.
   * @param timestamp - The current timestamp (in seconds granularity). 
   * @param {number} timestamp
   * @return {void}
   */
  hit = (timestamp) => {
    for (let i=timestamp; i<timestamp+300; i++) {
      this.ary[i] = (this.ary[i]) ? this.ary[i]+1 : 1;
    }
  };

  /**
   * Return the number of hits in the past 5 minutes.
   * @param timestamp - The current timestamp (in seconds granularity). 
   * @param {number} timestamp
   * @return {number}
   */
  getHits = (timestamp) => {
    if (this.ary[timestamp] === undefined) {
      return 0;
    } else {
      return this.ary[timestamp];
    }
  };
};


/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
