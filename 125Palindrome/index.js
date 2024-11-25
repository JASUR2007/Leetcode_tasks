var isPalindrome = function(s) {
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleanedString.length - 1;
    while (left < right) {
        if (cleanedString[left] !== cleanedString[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;

    // const normalizedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // const reversedString = normalizedString.split('').reverse().join('');
    // return normalizedString === reversedString;
};

nums = [2,2,1]
let result = []
console.log(nums.includes(3))