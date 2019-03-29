var arrayPairSum = function(nums) {
  // obvious intution is to sort them, and then group in pairs of 2, then sum the min of all of them
  // when grouping in pairs of 2 try using 2 pointers instead of just keeping a counter
  nums = nums.sort(function(a,b) { return a-b; });
  var j;
  var pairs = [];

  for (var i=0; i<nums.length; i++) {
    if (i%2 == 1) {
      j=i-1;
      pairs.push([nums[j], nums[i]]);
    }
  }
  
  pairs = pairs.map(function(a) { return Math.min(a[0], a[1]); } );
  return pairs.reduce(function(a, b) { return a+b; }, 0);
};

// Not an obvious intution.
// The inner loop w/curAmount takes advantage of:
// an even count will cancel (2,2), (2,2)
// an odd count will get the min of two values (2,2), (2,3)

// The toggling evenOdd basically negates every other value
// It's a bitwise operation for added speed T_T

// var arrayPairSum = function(nums) {
//   let hash = [];
//   for(let i=0; i<20001;++i){
//     hash[i]=0;
//   }
//   let sum = 0;
//   let min= Number.MAX_VALUE;
//   let max= Number.MIN_VALUE;
//   for(let i=0; i<nums.length;++i){
//     let cur=nums[i]+10000;
//     ++hash[cur];
//     min=Math.min(min,cur);
//     max=Math.max(max,cur);
//   }
//   let evenOdd=0;
//   for(let i=min; i<=max;++i){
//     let curAmount=hash[i];
//      for(let j=0; j<curAmount;++j){
//         if(evenOdd==0){
//           sum+=i-10000;
//         }
//        evenOdd^=1;
//      }
//   }
//   return sum;
// };

console.log(arrayPairSum([1,4,3,2]));
