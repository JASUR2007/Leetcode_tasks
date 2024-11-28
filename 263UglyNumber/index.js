var isUgly = function(n) {
    if (n <= 0) {
        return false;
    }
    const primes = [2, 3, 5];
    for (let prime of primes) {
        while (n % prime === 0) {
            n = n / prime;
        }
    }
    console.log(n === 1);
};
isUgly(14)