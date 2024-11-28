// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:


// nums = [2,14,18,22,22]
// var containsDuplicate = function(nums) {
//     let c = false
//     let num = nums.sort((a,b) => a - b)
//     for (i = 1; i < nums.length; i++) {
//         if (num[i] === num[i-1]){
//             c = true
//             break
//         }   
//     }
//     return c
// };
// console.log(containsDuplicate(nums))

// var containsDuplicate = function(nums) {
//     let s = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         if (s.has(nums[i])) return true
//         else s.add(nums[i])
//     }
//     return false
// };







let s = [3,5,3,3,4,5,6,6,7,6,3,3,3,3]
let x = s.sort((a,b) => a - b)
prev = 0
let ans = 0
let ex = x[0]
result = x[0]
for (i = 0; i < x.length; i++) {
    if (x[i] === ex) {
        ans++
    } else {        
        ex = x[i]
        prev = Math.max(ans, prev)
        ans = 0
        ans++
    }
    if (ans > prev) {
        result = x[i]
    }
}
console.log('value:' + prev, "result:" + result)

