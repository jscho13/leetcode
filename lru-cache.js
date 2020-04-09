/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.dict = {};
    this.stack = [];
    this.capacity = capacity;
  }
  
  /** 
   * @param {number} key
   * @return {number}
   */
  get = (key) => {
    if (this.dict[key]) {
      let idx = this.stack.indexOf(key);
      this.stack.splice(idx, 1);
      this.stack.push(key);
      return this.dict[key];
    }
    return -1;
  }

  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  put = (key, value) => {
    if (this.dict[key]) {
      this.dict[key] = value;
      this.get(key);
    } else {
      this.dict[key] = value;
      this.stack.push(key);
      if (this.stack.length > this.capacity) {
        let deleted = this.stack.shift();
        delete this.dict[deleted];
      }
    }
  }
}
