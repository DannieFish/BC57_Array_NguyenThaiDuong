function findPrime(n) {

    var output = true;

    if (n < 2) {
        output = false;
    }
    else {
        for (var i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                output = false;
                break;
            }
        }
    }
    return output;
}