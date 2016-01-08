//Q: Find the nth fibonacci number

//***************Solution 1************************//
//bottom up approach - start case and work your way up
function nthFib(n) {
    var fib = [0,1];

    function searchFib(i) {
        if(i > n) { return; }
        fib[i] = fib[i-2] + fib[i-1];
        searchFib(i+1);
    }

    searchFib(2,n);
    return fib[n];
}

nthFib(10);

//***************Solution 2************************//
//top down approach  - start at input and work our way down to base case
function nthFib(n){
    var result;

    function searchFib(i) {
        if(i<2) {
            return i;
        } else {
            return searchFib(i-2) + searchFib(i-1);
        }
    }

    result = searchFib(n);
    return result;
}

nthFib(10);


