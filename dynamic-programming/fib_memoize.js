var findFib = function() {
  var cache = {};

  function memoize(index) {
    var result;
    if (index in cache) {
      result = cache[index];
    } else {
      if (index === 0 || index === 1) {
        result = index;
      } else {
        result = memoize(index - 1) + memoize(index - 2);
      }
      cache[index] = result;
    }
    return result;
  }
  return memoize;
}();


// console.log(findFib(3));
// console.log(findFib(4));
// console.log(findFib(5));
// console.log(findFib(37));
// console.log(findFib(70));
// console.log(findFib(100));