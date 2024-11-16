
var addBinary = function(a, b) {
    a = a.split('').reverse();
    b = b.split('').reverse();
    let result = [];
    let carry = 0;
    let maxLength = Math.max(a.length, b.length); 
    for (let i = 0; i < maxLength; i++) {
        let bitA = i < a.length ? parseInt(a[i], 10) : 0;
        let bitB = i < b.length ? parseInt(b[i], 10) : 0;
        let sum = bitA + bitB + carry;
        result.push(sum % 2);
        carry = Math.floor(sum / 2); 
    }
    if (carry > 0) {
        result.push(carry);
    }
    return result.reverse().join('');
};

// console.log(addBinary('1010', '1011'));

// let a = 1,
// b = 1
// sum =  (
//     parseInt(a, 2) +
//     parseInt(b, 2) + 
//     parseInt(0, 2)
// ).toString(2);
// console.log(sum.split('')[sum.split('').length-1])

var addBinary = function(a, b) 
{
    let sum = BigInt('0b'+a)+BigInt('0b'+b)
    return BigInt('0b'+a) + BigInt('0b'+b).toString(2); 
    // return sum.toString(2)
};

console.log(addBinary('1010', '1011'));

