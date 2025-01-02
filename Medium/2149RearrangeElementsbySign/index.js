//
// Read more
// 2149. Rearrange Array Elements by Sign
// Medium
// Topics
// Companies
// Hint
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
//
//     You should return the array of nums such that the the array follows the given conditions:
//
//     Every consecutive pair of integers have opposite signs.
//     For all integers with the same sign, the order in which they were present in nums is preserved.
//     The rearranged array begins with a positive integer.
//     Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// nums = [3,-2, 1,-5,2,-4]
// let rearrangeArray = function(nums) {
//     res = []
//     res.push(nums[0])
//     for (i = 1; i < nums.length;i++) {
//         if (nums[i-1] > 0 && nums[i] < 0 || nums[i-1] < 0 && nums[i]) {
//             res.push(nums[i - 1])
//             console.log(i, nums[i - 1], res)
//         } else if (nums[i-1] > 0 && nums[i] > 0 || nums[i-1] < 0 && nums[i] < 0) {
//             for (let k = i + 1; k < nums.length; k++) {
//                 if (nums[i - 1] > 0 && nums[k] < 0 || nums[i - 1] < 0 && nums[k] > 0) {
//                     res.push(nums[k]);
//                     console.log(i, nums[k], res)
//                     break
//                 }
//             }
//         }
//     }
//     return res;
// };
// console.log(rearrangeArray(nums))
//









nums = [3,1,-2,-5,2,-4]
// let rearrangeArray = function(nums) {
//     let positive = [];
//     let negative = [];
//     let result = [];
//
//     for (let num of nums) {
//         if (num > 0) positive.push(num);
//         else negative.push(num);
//     }
//
//     while (positive.length && negative.length) {
//         result.push(positive.shift());
//         result.push(negative.shift());
//     }
//
//     return result;
// };
//
// console.log(rearrangeArray(nums));

let rearrangeArray = function(nums) {
    let positive = [];
    let negative = [];
    let result = [];
    for (let num of nums) {
        if (num > 0) positive.push(num);
        else negative.push(num);
    }

    let i = 0;
    while (i < positive.length && i < negative.length) {
        result.push(positive[i]);
        result.push(negative[i]);
        i++;
    }
    return result;
};