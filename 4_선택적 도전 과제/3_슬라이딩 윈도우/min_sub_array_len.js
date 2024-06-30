/*
* 문제(슬라이딩 윈도우)
* 양수 배열과 양수라는 두 개의 매개 변수를 받아들이는
* minSubArrayLen이라는 함수를 작성하세요.
* 이 함수는 합이 함수에 전달된 정수보다 크거나 같은 인접한 하위 배열의 최소 길이를 반환 해야함.
* 값이 없는 경우 0반환
* */

function minSubArrayLen(arr, num) {
    // 너무 어려워서 패스
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2 -> [4,3]가 가장 작은 부분 배열이기 때문입니다
console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2 -> [5,4]가 가장 작은 부분 배열이기 때문입니다
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1 -> [62]는 52보다 크기 때문에
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)); // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)); // 0