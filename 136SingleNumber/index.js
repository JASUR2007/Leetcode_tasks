let nums = [2, 2, 1, 3, 3, 9, 9];
let uniqueArr = '';

for (let i = 0; i < nums.length; i++) {
    let foundDuplicate = false;
    for (let j = 0; j < nums.length; j++) {
        if (i !== j && nums[i] === nums[j]) {
            foundDuplicate = true;
            break;
        }
    }
    if (!foundDuplicate) {
        uniqueArr = nums[i];
    }
}

console.log(uniqueArr);

    let result = 0; // Initialize the result to 0
    // Iterate through the nums array
    for (let i = 0; i < nums.length; i++) {
        // Use the bitwise XOR operator to find the single number
        result ^= nums[i];
    }
    // Return the result, which will be the single number that appeared only once
    console.log(result);


