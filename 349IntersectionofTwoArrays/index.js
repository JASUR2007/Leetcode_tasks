/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const resultSet = new Set();
    for (const num of nums2) {
        if (set1.has(num)) {
            resultSet.add(num);
        }
    }
    console.log(Array.from(resultSet));
};
intersection([1,2,2,1],[1,2,4,3,4,1])
//
// let set1 = new Set(nums1);
// let set2 = new Set(nums2);
// let result = [...set1].filter(num => set2.has(num));
//
// return result;