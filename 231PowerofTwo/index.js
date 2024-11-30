/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n % 2 == 0 || n == 1) {
        for (i = 0; i < 31; i++) {
            if (Math.pow(2, i) == n) {
                return true
            }
        }
    } else {
        return false
    }
    return false
};



var isPowerOfTwo = function(n) {
    
    if (n <= 0) {
        return false;
    }
    // n &= (n-1);
    console.log(n = n & (n-1))
    if (n===0) {
        return true
    } else {
        return false
    }
};
// isPowerOfTwo(32)

console.log(12 & 11)
// 1010
// 1011
// 1010
