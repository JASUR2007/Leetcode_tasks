function moveZeroes(nums) {
    zero = 0
    let index = nums.indexOf(1)
    for(i = 0; nums.indexOf(0) != -1; i++) {
        nums.splice(nums.indexOf(0),1)
        zero++
    }
    for (i = 0; i < zero; i++) {
        nums.push(0)
    }
    console.log(nums);
};
moveZeroes([0,1,1,0]);





// function moveZeroes(nums) {
//     let res = [];
//     let zeros = 0;
//     nums.filter(function (el) {
//       el != 0 ? res.push(el) : (zeros += 1);
//     });
//     for (i = 0; i < zeros; i++) {
//       res.push(0);
//     }
//     return res;
//   }
//   console.log(moveZeroes([0, 1, 0, 3, 12]));

// function moveZeroes(nums) {
//     let count = 0;
//     let len = nums.length;
//     for (i = 0; i < len; i++) {
//       if (nums[i] != 0) {
//         nums[count++] = nums[i];
//       }
//     }
//     while (count < len) {
//       nums[count++] = 0;
//     }
//     return nums;
//   }