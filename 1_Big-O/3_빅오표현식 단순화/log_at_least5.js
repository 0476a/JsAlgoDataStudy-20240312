function log_at_least5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

console.log(log_at_least5(10));