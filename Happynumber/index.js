var isHappy = function(n) {
    let zero = 0
    while (zero != 1) {
        for (i = 0; i < String(n).length; i++) {
            zero += +(String(n)[i]) * +(String(n)[i])  
        }
        if (zero > 1 && zero < 10) {
            return false
        }
    }  
    return true
};  