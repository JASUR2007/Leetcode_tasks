// Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

// If the fractional part is repeating, enclose the repeating part in parentheses.

// If multiple answers are possible, return any of them.

// It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

 

// Example 1:

// Input: numerator = 1, denominator = 2
// Output: "0.5"
// Example 2:

// Input: numerator = 2, denominator = 1
// Output: "2"
// Example 3:

// Input: numerator = 4, denominator = 333
// Output: "0.(012)"
 

var fractionToDecimal = function(numerator, denominator) {
    console.log(numerator/denominator)


};

fractionToDecimal(4, 333)

let d = 0.012012012012012012
let remain = String(d).split('.')[1]
for(i = 0; i < remain.length; i++) {
    for(j = 1; j < remain.length; j++) {
        if(i !== j) {
            console.log(i, j)
        }
        // if (remain[i] == remain[j]) {

        // } 
    }
}


