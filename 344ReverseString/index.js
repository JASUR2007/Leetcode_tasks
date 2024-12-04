// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

let s = ["h","e","l","l","o"]
var reverseString = function(s) {
    let str = ["h", "e", "l", "l", "o"];
    let reversed = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed.split("");
};
console.log(reverseString(s))