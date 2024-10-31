// //
//     // Given an array arr and a chunk size size, return a chunked array.

// const { compose } = require("redux");

//     // A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

//     // You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

//     // Please solve it without using lodash's _.chunk function.

    

//     // Example 1:

//     // Input: arr = [1,2,3,4,5], size = 1
//     // Output: [[1],[2],[3],[4],[5]]
//     // Explanation: The arr has been split into subarrays each with 1 element.
//     // Example 2:

//     // Input: arr = [1,9,6,3,2], size = 3
//     // Output: [[1,9,6],[3,2]]
//     // Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
//     // Example 3:

// // 

// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array}
//  */
var chunk = function(arr, size) {
    let dock = []
    let rock = []
    for(i = 0; i < arr.length; i++) {
        rock.push(arr[i])
        if((i+1) % size === 0) {
            dock.push(rock)
            rock = []
        } else if (i === arr.length - 1) {
            dock.push(rock)
        }
    };
    return dock
};
console.log(chunk([1,2,3,4,5], 2))





var chunk1= function(arr, size) {
    const outputArr = [];

    for (let i = 0; i < arr.length; i = i + size) {
        outputArr.push(arr.slice(i, i + size))
    }

    return outputArr;
    
};
console.log(chunk1([1,2,3,4,5], 3))


go = [2,3,4,5,6]
rock = []
rock.push(go.slice(0,3))
console.log(rock)