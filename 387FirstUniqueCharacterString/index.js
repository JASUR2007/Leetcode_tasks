let s = 'loveleetcode' 
let unique = ''
for(let i = 0; i < s.length; i++) {
    let straight = false
    for(let j = 0; j < s.length; j++) {
        if (j != i && s[i] === s[j]) {
            straight = true
            break;
        }else {
            unique = -1
        }
    }
    if(!straight) {
        unique = i
        break;
    }
}
console.log(unique)



// var firstUniqChar = function(s) {
//     let lookup = {};
//     for(let i = 0; i < s.length; i++) {
//         let key = s[i];
//         if(lookup[key]) {
//             lookup[key] += 1;
//         } else {
//             lookup[key] = 1;
//         }
//     }
//     for(let i = 0; i < s.length; i++) {
//         if(lookup[s[i]] === 1) {
//             return i;
//         }
//     }
//     return -1;
// };

// const firstUniqChar = s => {
//   const fm = new Array(26).fill(0);
//   const im = fm.slice();
//   const n = s.length;
//   const a_code = 'a'.charCodeAt();
//   for(let i = 0; i < n; ++i) {
//     const idx = s[i].charCodeAt() - a_code;
//     if(!fm[idx]) im[idx] = i;
//     ++fm[idx];
//   }
//   let min_idx = n;
//   for(let i = 0; i < 26; ++i)
//     if((fm[i] === 1) && (im[i] < min_idx)) min_idx = im[i];
  
//   return min_idx === n
//     ? -1
//     : min_idx;
// };