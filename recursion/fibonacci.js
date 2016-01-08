//find the nth fibonacci number
//bottom up approach - start case and work your way up
function nthFib(n) {
    //1. initiate variable(s)
    var fib = [0,1];
    //3.helper method i:track state
    function searchFib(i) {
        //5. base case
        if(i > n) { return; }
        fib[i] = fib[i-2] + fib[i-1];
        searchFib(i+1);
    }
    //4. invoke helper method
    searchFib(2,n);
    //2. return statement
    return fib[n];
}

nthFib(10);

//top down approach  - start at input and work our way down to base case
function nthFib(n){
    //1.initiate variable(s)
    var result;
    //3. helper method i: to track state
    function searchFib(i) {
        //5.base case, stop when i is either 1 or 0
        if(i<2) { return i; }
        else {
            //6. recursive case - searchFib is called twice, leading to branching, this is a multiple recursion
            return searchFib(i-2) + searchFib(i-1);
        }
    }
    //4. call helper method so we don't forget
    result = searchFib(n);
    //2. return statement so we don't forget
    return result;
}

nthFib(10);


