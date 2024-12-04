let prices = [7,1,5,3,6,4]
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; //
            console.log(minPrice)
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice; // 
            console.log(maxProfit)
        }
    }
    return maxProfit;
    // let min = Math.min(...prices)
    // let max = Math.max(...prices)
    // array = pricesq
    // let index = prices.indexOf(max)
    // result = 0
    // // for (i = min_i; i < prices.length; i++) {
    // //     if (max > min) {
    // //         max = prices[i]
    // //         result = i
    // //     }
    // // }
    // if (prices.indexOf(max) <= prices.indexOf(min)) {
    //     array = array.slice(prices.indexOf(max)+1, prices.length)
    // }
    // console.log(min)
    // console.log(index)
    // console.log(max)
    // console.log(array)
    // console.log(result)
};
console.log(maxProfit(prices))
let int = 0
while (int !== 100) {
    console.log(int++)
}