// nums = [102,12,13,14]
// result = new Array(nums.length).fill(0)
// for(i = 0; i < nums.length; i++) {
//     numbers = nums[i]
//     for(j = 1; j <= String(numbers).length; j++) {
//         result[i] = +result[i] + (+String(numbers)[j-1])
//     }
// } 
// console.log(Math.min(...result))





nums = [101,13,15,14]
let min = Infinity;
for(let num of nums) {

     let sum = 0;

     while(num > 0) {
         sum += num % 10; // 2 0 1      1 0
         console.log(sum, num, num % 10)
         num = Math.floor(num / 10); // 10 1       10 1
     }
     min = Math.min(min, sum);
}
console.log(min);
    

