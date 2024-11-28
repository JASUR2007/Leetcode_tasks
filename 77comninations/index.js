// single variable calculus stewart

// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

 

// Example 1:

// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
// Example 2:



let n = 4;
let k = 2;
let result = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i != j) {
            let time = []
            // while(time[j].length < k) {
            //     time.push(j)
            // }
        }
    }        
}



function combine(n, k) {
    const result = [];
    function backtrack(start, currentCombination) {
        if (currentCombination.length === k) {
            result.push([...currentCombination]);
            return;
        }
        for (let i = start; i <= n; i++) {
            currentCombination.push(i); 
            backtrack(i + 1, currentCombination);
            currentCombination.pop();
        }
    }
    backtrack(1, []);
    
    return result;
}