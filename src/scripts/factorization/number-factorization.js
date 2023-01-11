function factorize(n) {
    var factors = [];
    divisor = 2;

    while (n > 1) {
        while (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        }
        divisor = divisor + 1;
    }
    return factors;
}

console.log(factorize(100));