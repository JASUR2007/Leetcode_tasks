// 22. Generate Parentheses
// Medium
// Topics
// Companies
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

n = 3

var generateParenthesis = function(n) {
    result = []
    function backtrack(s, open_count, close_count) {
        if (s.length == 2 * n) {
            result.push(s)
            return
        }
        if (open_count < n) {
            backtrack(s + "(", open_count + 1, close_count)   
        }
        if (close_count < open_count) {
            backtrack (s + ')', open_count, close_count + 1) 
        }
    } 
    backtrack("", 0, 0)
    return result
};
console.log(generateParenthesis(n))