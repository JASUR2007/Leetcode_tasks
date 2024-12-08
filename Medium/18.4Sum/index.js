let nums = [-5,5,4,-3,0,0,4,-2], target = 4
var fourSum = function(nums, target) {
    const srd = nums.sort((a,b) => a - b)
    let result = []
    for(i = 0; i < srd.length-3; i++) {
        for (j = i + 1; j < srd.length-2; j++) {
            for (l = j + 1; l < srd.length -1; l++) {
                for (k = l + 1; k < srd.length; k++) {
                    if (srd[i] + srd[j] + srd [l] + srd[k] == target) {
                        result.push([srd[i], srd[j], srd [l], srd[k]])
                    }
                }
            }
        }
    }
    return result
};
console.log(fourSum(nums, target))



//  0 1 2 3
//  0 1 2 4
//  0 1 2 5
//  0 1 3 4
//  0 1 3 5
//  0 1 4 5
//  0 2 3 4
//  0 2 3 5
//  0 2 4 5
//  0 3 4 5
//  1 2 3 4
//  1 2 3 5
//  1 2 4 5
//  1 3 4 5




numb = 199
var addDigits = function(numb) {
    let str = String(numb);
    let sum = 0;  // Declare sum outside of the function to accumulate its value
    
    function rost(r) {
        if (sum.toString().length > 1) {
            sum += +r;  
            return r; 
        } else {
            i = 0;
            return i;  
        }
    }
    
    for (let i = 0; i < str.length; i++) {
        let r = str[i];
        rost(r);
    }
    
    console.log(sum);  
    
};
console.log(addDigits(numb))


// var addDigits = function(numb) {
//     // Base case: if numb is a single digit, return it
//     if (numb < 10) {
//         return numb;
//     }
    
//     // Sum the digits of the current number
//     let sum = 0;
//     while (numb > 0) {
//         sum += numb % 10;  // Add the last digit to sum
//         numb = Math.floor(numb / 10);  // Remove the last digit
//     }
    
//     // Recursively call addDigits with the sum of digits
//     return addDigits(sum);
// };

// let numb = 199;
// console.log(addDigits(numb));