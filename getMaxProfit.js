// Writing coding interview questions hasn't made me rich. Maybe trading Apple stocks will.
// Suppose we could access yesterday's stock prices as an array, where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.

// Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// For example:
// stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

// get_max_profit(stock_prices_yesterday)
// # returns 6 (buying for $5 and selling for $11)

// *No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).


//time complexity: O(n+k)
//space complexity: O(1)

function getMaxProfit(arr) {
    if(arr.length < 2) {return "there must be at least 2 stock prices";}
    var lowestPrice = arr[0];
    var lowestIndex = 0;
    var highestPrice = 0;
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] < lowestPrice) {
            lowestPrice = arr[i];
            lowestIndex = i;
        }
    }
    for (var j = lowestIndex; j < arr.length; j++) {
        if(arr[j] > highestPrice){highestPrice = arr[j]; }
    }
    return highestPrice - lowestPrice;
}

var arr = [10, 7, 5, 8, 11, 9];
var arr2 = [1,1,1,1,1];
var arr3 = [];
//sln doesn't account for negative stock prices
//var arr4 = [-1, 0, -2, -3];

console.log(getMaxProfit(arr));
console.log(getMaxProfit(arr2));
console.log(getMaxProfit(arr3));