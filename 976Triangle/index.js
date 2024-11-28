var largestPerimeter = function(nums) {
    let sum = 0
    let numbers = [...nums].sort((a, b) => a - b)
    result = 0;
    for (i = numbers.length; i > 2; i--) {
        if (numbers[i - 1] + numbers[i - 2] > numbers[i]) {
            return nums[i -1] + numbers[i - 2] + numbers[i]
        } else {
            return 0
        }
    }
} 
console.log(largestPerimeter([2,1,2]))

let s = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(s);  // Output: [1, 2, 3, 4, 5]