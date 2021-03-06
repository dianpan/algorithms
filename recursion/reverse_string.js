/**
 * Reverse a String
 *
 * Given a single input string, write a function that reverses
 * the string recursively.
 *
 * What is the time and auxiliary space complexity of your solution?
 *
 * ex: strReverse('abc');
 *     => 'cba'
 **/


//Recursive solution
//time complexity: O(n)
//aux complexity: O(n)
 var strReverse = function(str) {
  var result = ""

  function traverse(i){
    if(result.length === str.length) {
      return;
    } else {
      result = result + str[i]; //n
      traverse(i-1) //n
    }
  }
  traverse(str.length-1);
  return result;
 };

console.log(strReverse('abcdefghijklmnopqrstuvwxyz'));

//Iterative solution
//time complexity: O(n)
//aux complexity: O(n)
var strReverse_it = function(str) {
  var result = "";
  for(var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};
console.log(strReverse_it('abcdefghijklmnopqrstuvwxyz'));