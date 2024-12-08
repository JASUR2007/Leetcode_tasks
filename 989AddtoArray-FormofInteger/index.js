let num = [1,2,4,3], 
    k = 3
// var addToArrayForm = function(num, k) {
//     let res = []
//     let logs = 0
//     let rost = Array.from(String(k), Number);
//     for (i = 0; i < Math.max(num.length, rost.length); i++) {
//         dox = !isNaN(+rost[rost.length - 1 - i]) ? +rost[rost.length - 1 - i] : 0;
//         xod = !isNaN(+num[num.length - 1 - i]) ? +num[num.length - 1 - i] : 0;
//         ans = String(dox + xod + +logs)
//         res.unshift(ans[1] == undefined ?
//             +ans[0] :
//             +ans[1])
//          logs = ans[1] == undefined ? 0 : ans[0]
//     }
//     while(logs == 1) {
//         res.unshift(+logs)
//         logs = 0
//     }
//     whiled = num.length - res.length == -1 ? 0 : num.length - res.length;
//     num.splice(whiled, res.length, ...res);
//     console.log(num);
// };
// console.log(addToArrayForm(num, k))





// number_list = num.join('')
// result = k + +(number_list)
// result = Array.from(String(result), Number);
// console.log(result)







function PlusOne(num, k) {
    for(let i = num.length-1; i>=0;i--){
        if(k === 0) break
        const sum = num[i] + k
        k = Math.floor(sum / 10)
        num[i] = sum % 10
    }
    
    while(k){
        const temp = k % 10
        k = Math.floor(k / 10)
        console.log(temp)
        console.log(Math.floor(k / 10))
        num.unshift(temp)
    }
    
    // return num
}
console.log(PlusOne(num, k))
