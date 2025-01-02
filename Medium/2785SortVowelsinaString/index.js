// All consonants remain in their original places. More formally, if there is an index i with 0 <= i < s.length such that s[i] is a consonant, then t[i] = s[i].
//     The vowels must be sorted in the nondecreasing order of their ASCII values. More formally, for pairs of indices i, j with 0 <= i < j < s.length such that s[i] and s[j] are vowels, then t[i] must not have a higher ASCII value than t[j].
//     Return the resulting string.
//
//     The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in lowercase or uppercase. Consonants comprise all letters that are not vowels.
//
//
//
//     Example 1:
//
// Input: s = "lEetcOde"
// Output: "lEOtcede"
// Explanation: 'E', 'O', and 'e' are the vowels in s; 'l', 't', 'c', and 'd' are all consonants. The vowels are sorted according to their ASCII values, and the consonants remain in the same places.
//     Example 2:


let s = "lEetcOde"
var sortVowels = function(s) {
    let arr = s.split('')
    let vowel = ['e', 'o', 'a','i', 'u']
    let obj = []
    for (i = 0; i < s.length; i++) {
        if (vowel.includes(s[i].toLowerCase())) {
            obj[i] = s[i].charCodeAt()
        }
    }
    let b = obj.sort((a, b) => a - b)
    let r = 0
    for (i = 0; i < s.length; i++) {
        if (vowel.includes(s[i].toLowerCase())) {
            arr.splice(i, 1, String.fromCharCode(obj[r]));
            r++
        }
    }
    console.log(arr.join(''))
};
sortVowels(s)





/**
 * @param {string} s
 * @return {string}
 */
function isVowel(element) {
    if (
        element === 'a' ||
        element === 'e' ||
        element === 'i' ||
        element === 'o' ||
        element === 'u' ||
        element === 'A' ||
        element === 'E' ||
        element === 'I' ||
        element === 'O' ||
        element === 'U'
    ) {
        return true;
    }
}
// var sortVowels = function(s) {
//     let arr = s.split('')
//     let vowel = ['e', 'o', 'a','i', 'u']
//     let obj = []
//     for (i = 0; i < s.length; i++) {
//         if (isVowel(s[i])) {
//             obj[i] = s[i].charCodeAt()
//         }
//     }
//     let b = obj.sort((a, b) => a - b)
//     let r = 0
//     for (i = 0; i < s.length; i++) {
//         if (isVowel(s[i])) {
//             arr.splice(i, 1, String.fromCharCode(obj[r]));
//             r++
//         }
//     }
//     return arr.join('')
// };