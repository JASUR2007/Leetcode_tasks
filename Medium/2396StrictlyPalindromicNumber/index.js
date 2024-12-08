        // console.log(obj[i].split("").reverse().join("").split(" ").reverse().join(" "), obj[i])

// 2396. Strictly Palindromic Number
// Medium
// Topics
// Companies
// Hint
// An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.

// Given an integer n, return true if n is strictly palindromic and false otherwise.

// A string is palindromic if it reads the same forward and backward.




n = 9

function StrinctPalindrome(n) {
    obj = {}
    for (i = 2; i <= 35; i++) {
        obj[i] = n.toString(i)
    }
    console.log(obj)
    for (i of Object.keys(obj)) {
        if (+obj[i].split('').reverse().join("") == obj[i]) {
            r = 1
        } else {
            return false
        }
    }
    return true
}

console.log(StrinctPalindrome(n))