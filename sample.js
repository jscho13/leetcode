// Backtrack
// var subsets = function(nums) {
//     let result = [[]];
//     
//     function backtrack(first, current) {
//       // we iterate over the indexes i from 'first' to the length
//       //of the entire sequence 'nums'
//       for (let i = first; i < nums.length; i++) {
//           current.push(nums[i]);
// 
//           // use distructure operator to clone 'current' value and save to 'result'
//           result.push([...current]);
//           console.log(result);
// 
//           // generate all other subsets for the current subset.
//           // increasing the position by one to avoid duplicates in 'result'
//           backtrack(i + 1, current);
// 
//           // BACKTRACK.
//           current.pop();
//       }
//       console.log('finished');
//     }
//     
//     backtrack(0, []);
//     return result
// };
//
// console.log(subsets([1,2,3]));


// Binary search
// var doSearch = function(array, targetValue) {
// 	var min = 0;
// 	var max = array.length - 1;
//   while (min <= max) {
//     var mid = Math.floor((min+max)/2);
//     console.log(mid);
//     if (array[mid] > targetValue) {
//       max = mid-1;
//     } else if (array[mid] < targetValue) {
//       min = mid+1;
//     } else {
//       return mid;
//     }
//   }
// 
// 	return -1;
// };
// 
// var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
// 		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
// var result = doSearch(primes, 42);
// console.log("Found prime at index " + result);
//
// Mistakes:
// while needs to be <=... if there's no equal it won't be able to find 1 item arrays e.g. [2]
// max/min needs to be +1/-1. Otherwise it'll get closest element and then not move 

