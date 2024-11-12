/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    roster = 0
    sum = 0
    ans = []
    for (i = 0; i < num_people; i++) {
        if(sum + roster < candies) {
            ans[i] = roster + 1  
            roster = roster + 1 //0 1 2  
            sum += roster //0 1 3 
        }
         else {
            roster = roster + 1
            ans[i] = candies - sum  
            sum += candies - sum
        }
    }
    if (sum === candies) {
        return ans
    }
    else {
        for (i = 0;sum < candies; i++) {
            if (i === num_people) {
                i = 0
            }
            if (sum + roster > candies) {
                ans[i] = candies - sum
            }else {
                roster = roster + 1
                ans[i] += roster
                sum += roster
                console.log(roster, ans) 
            }

        }
        return ans;
    }
};
console.log(distributeCandies(60, 4))