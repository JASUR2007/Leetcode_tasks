// Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.

// The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

 

// Example 1:

// Input: nums = [1,2,10,5,7]
// Output: true
// Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
// [1,2,5,7] is strictly increasing, so return true.



let nums = [1,2,5,7]
var canBeIncreasing = function(nums) {
    res = 0
    if (nums.length <= 2) {
        return true
    }
    for (i = 1; i < nums.length - 1; i++) {
        if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
            nums.splice(i,1)
            if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) {
                res = 1
            } else {
                res = 0
            }
        } else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1])  {
            res = 1
        }
    } 
    console.log(res)
    // return res
};
console.log(canBeIncreasing(nums))