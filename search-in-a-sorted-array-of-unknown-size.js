/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
const search = (reader, target) => {
    let low = 0;
    let high = 10000;
    let oob = 2147483647;
    
    while (low != high) {
        let query = Math.floor((low+high)/2);
        let res = reader.get(query);
        
        if (res === oob) {
            high = query;
        } else if (res === target) {
            return query;
        } else if (res < target) {
            low = query+1;
        } else {
            high = query;
        }
    }
    
    return -1;
};
