function log_at_most5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

console.log(log_at_most5(10));