let s = "ab", t = "a"
var isAnagram = function(s, t) {
    result = {}
    for (i = 0; i < s.length; i++) {
        if (result[s[i]] == undefined) {
            result[s[i]] = 1
        } else {
            result[s[i]] += 1
        }
    }
    for (i = 0; i < t.length; i++) {
        if (result[t[i]] == undefined) {
            return false
        } else {
            result[t[i]] -= 1
        }
        if (result[t[i]] == -1)  {
            return false
        }
    }
    for (results of Object.values(result)) {
        if (results != 0) {
            return false
        }
    }
    return true
};
console.log(isAnagram(s,t))