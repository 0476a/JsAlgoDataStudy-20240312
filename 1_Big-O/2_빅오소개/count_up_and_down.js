function count_up_and_down(n) {
    console.log("Going up!");
    for (var i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top! \nGoing down...");
    for (var j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!");
}

console.log(count_up_and_down(10));