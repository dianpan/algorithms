//Q: Given a set S, return the power set P(S), which is a set of all subsets of S.
//Example: S = "abc", P(S) = ['', 'a', 'b','c','ab','ac','bc','abc']

//recursive solution
var powerSet = function(str){
  var result = [];

  function traverse(build, depth){
    if(depth === str.length) {
      result.push(build);
      return;
    } else {
      //left side of tree
      traverse(build, depth + 1);
      //right side of tree
      traverse(build + str[depth], depth + 1);
    }
  }

  traverse('', 0);
  return result;
};

//iterative solution
var powerSetIter = function(str){
  var counter = 0;
  var result = [''];

  while (counter < str.length) {
    var temp = [];
    for(var i = 0; i < result.length; i++) {
      temp.push(result[i]);
      temp.push(result[i] + str[counter]);
    }
    result = temp;
    counter++
  }

  }
  return result;
};

// console.time('RECUR: ')
// console.log(powerSet('abc'))
// console.timeEnd('RECUR: ')

// console.time('ITER: ')
// console.log(powerSetIter('abc'))
// console.timeEnd('ITER: ')