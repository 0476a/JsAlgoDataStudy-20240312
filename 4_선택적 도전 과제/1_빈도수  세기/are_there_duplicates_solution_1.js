/*
* 빈도 수 세기 방식의 해결법
* arguments: 가변 인자를 뜻함.
* */

function areThereDuplicates() {
    let collection = {};
    for(let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }
    for(let key in collection) {
        if(collection[key] > 1) return true;
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true