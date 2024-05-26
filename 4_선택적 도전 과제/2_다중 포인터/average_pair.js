/*
* 문제(다중 포인터)
* average_pair 라는 함수를 작성
* 정렬된 정수 배열과 목표 평균이 주어졌을 때,
* 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인
* 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있음.
* */

function averagePair(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let avg = (arr[left] + arr[right]) / 2
        if(avg === num) {
            return true;
        } else if(avg > num) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

console.log(averagePair([1,2,3],2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([],4)); // false