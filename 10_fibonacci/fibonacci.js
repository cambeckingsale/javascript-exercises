const fibonacci = function(n) {
    if (n <= 2) {
        if (n < 0) {
            return "OOPS"
        }
        return 1
    }
    return (fibonacci(n-1) + fibonacci(n-2))
};

module.exports = fibonacci;
