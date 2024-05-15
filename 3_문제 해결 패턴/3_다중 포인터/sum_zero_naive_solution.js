/*
* 문제(다중포인트)
* 정렬된 정수 배열을 받아들이는 sumZero라는 함수를 작성
* 함수는 합이 0인 첫 번째 쌍을 찾야아함.
* 합이 0이 되는 두 값을 모두 포함하는 배열을 반환하거나
* 쌍이 존재하지 않는 경우 정의되지 않은 값을 반환
* */

function sumZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined

/*
* 시간 복잡도 - O(n^2)
* 공간 복잡도 - O(1)
* */