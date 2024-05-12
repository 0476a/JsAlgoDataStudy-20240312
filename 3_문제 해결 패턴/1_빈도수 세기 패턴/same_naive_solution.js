/*
* 문제
* 두 개의 배열을 받는 same이라는 함수를 작성함.
* 첫 번째 배열의 모든 값이 두 번째 배열의 해당 값을 제곱한 경우 함수는 true를 반환함.
* 값의 빈도는 동일 해야함!
* ex1) same([1,2,3], [1,4,9]) => true
* ex2) same([1,2], [1,4,9]) => false
* ex3) same([1,2,1], [1,4,4]) => false
* */

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] **2);
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1);
    }
    return true;
}

console.log(same([1,2,3,2], [9,1,4,4]));

/*
* 출력:
* [ 9, 1, 4, 4 ]
* [ 9, 4, 4 ]
* [ 9, 4 ]
* [ 4 ]
* true
* */