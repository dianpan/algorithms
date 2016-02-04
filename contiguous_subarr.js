// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

//input: array
//output: integer(max contig. sum)

// Time Complexity: O(n)
// Space Complexity: O(1)

// Example:
// For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
// the contiguous subarray [4,−1,2,1] has the largest sum = 6

var contigSubarr = function(arr) {
  var currMax = arr[0];
  var finalMax = arr[0];
  for(var i = 1; i < arr.length; i++) {
    currMax = Math.max(currMax + arr[i], arr[i]);
    finalMax = Math.max(currMax, finalMax);
  }
  return finalMax;
};

console.log(contigSubarr([-2,1,-3,4,-1,2,1,-5,4]));
//=> [4,−1,2,1]; 6
console.log(contigSubarr([-2,-3,-1,-5]));
//=> [−1]; -1
