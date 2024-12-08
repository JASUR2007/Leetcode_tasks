// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger).
//  You must also not convert the inputs to integers directly.
let num1 = "560", num2 = "12"
var addStrings = function(num1, num2) {
    res = []
    logs = 0
    for (i = 0; i < Math.max(num1.length, num2.length); i++) {
      x = num1[num1.length - i - 1] == undefined ? 0 : +num1[num1.length - i - 1];
      y = num2[num2.length - i - 1] == undefined ? 0 : +num2[num2.length - i - 1];
      res.unshift((x + y + logs) % 10)
      logs = (x + y + logs) >= 10 ? 1 : 0
    }
    if (logs == 1) {
        res.unshift(1)
    }
    console.log(String(res.join('')))
  };
 addStrings(num1, num2)





function PlusOne(num1, num2) {
    let res = '';
    let carry = 0;
    let a = num1.length - 1;
    let b = num2.length - 1;
   
    while (a >= 0 || b >= 0) {
      const x = parseInt(num1[a] || '0');
      const y = parseInt(num2[b] || '0');
      console.log(x, y)
      const z = x + y + carry;
      carry = Math.floor(z / 10);
      const sum = z >= 10 ? z % 10 : z;
      res = `${sum}${res}`;
      a -= 1;
      b -= 1;
    }
    return carry > 0 ? `${carry}${res}` : res;
}


PlusOne(num1, num2)

// let a= BigInt(num1)
// let b=BigInt(num2)


// let s = a+b
// let output=s.toString()
// return output


