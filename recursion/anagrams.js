/**
 * All Anagrams
 *
 * Given a single input string, write a function that produces
 * all possible anagrams of a string and outputs them as an array.
 * Be sure that there are no duplicates in your return array.
 *
 * What is the time complexity of your solution?
 *
 * ex: allAnagrams('abc');
 *     => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
 *
 **/

//time complexity: O(n!)
//aux complexity: O(n!)

 var allAnagrams = function(str){
  var results = [];
  str = str.split('');

  var traverse = function(buildUp, pullFrom) {
    if(pullFrom.length === 0) {
      results.push(buildUp);
      return;
    } else {
      for(var i = 0; i < pullFrom.length; i++) {
        var letter = pullFrom[i];
        pullFrom.splice(i, 1);
        traverse(buildUp + letter, pullFrom);
        pullFrom.splice(i, 0, letter);
      }
    }
  }
  traverse('', str);
  return results;
 }

console.log(allAnagrams('abc'));