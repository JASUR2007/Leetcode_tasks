nums = [3,2,1]
var thirdMax = function(nums) {
        if(nums.length < 3) {
            return Math.max(nums);
        }
        let d = [...nums].sort((a,b) => a - b)
        return d[d.length-3];
};
console.log(thirdMax(nums))