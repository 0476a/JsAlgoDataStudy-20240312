/*
* 문제(빈도수 세기 / 다중 포인터)
* 가변적인 수의 인수를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현함.
* 빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.
* */


// 문제 풀다가 답지 참고해서 문제를 품!
function areThereDuplicates(...data) {
    let collection = {};
    for(let val in data) {
        collection[data[val]] = (collection[data[val]] || 0) + 1;
    }
    for(let key in collection) {
        if(collection[key] > 1) return true;
    }
    return false;
}


console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true


