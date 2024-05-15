/*
* 문제(고유값 세기)
* 정렬된 배열을 받아들이고 배열의 고유 값을 계산하는 countUniqueValues 라는 함수를 구현
* 배열에는 음수가 있을 수 있지만 항상 정렬됨.
* */
function countUniqueValues(arr) {
    let first = 0;
    let second = 1;
    const returnArray = [];

    // arr의 값이 빈 배열이면 0을 리턴
    if(arr.length < 1) {
        return 0;
    }

    // 기본 값으로 첫 인덱스의 값을 넣어줌.
    returnArray.push(arr[first]);

    while(first < second) {
        // 값이 같으므로 다음 비교 대상으로 넘어감.
        if(arr[first] === arr[second]) {
            second++;
            // 값이 다를 경우 새로운 값들은 하나씩 추가해줌.
        } else if(arr[first] !== arr[second]) {
            returnArray.push(arr[second]);
            first = second;
            // 만약 마지막 인덱스에 온다면 second의 값을 더 이상 증가시키지 않고
            // 반복을 마무리 해줌.
            if(arr.length -1 !== second) {
                second++;
            }
        }
    }
    return returnArray.length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4