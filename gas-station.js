/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// O(n)
// S(1)
const canCompleteCircuit = (gas, cost) => {
  let station=0;
  let route=gas.length;
  while (station<route) {
    let stop=0;
    let driving=gas[stop];
    while (driving>=cost[stop] && stop<gas.length) {
      driving -= cost[stop];
      stop++;
      driving += gas[stop];
    }
    if (stop === gas.length) break;
    
    // rotate
    gas.push(gas.shift());
    cost.push(cost.shift());
    station++;
  }
  
  return station===route ? -1 : station;
};
