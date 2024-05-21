/*
* 문제(슬라이딩 윈도우)
* 정수 배열과 n 이라는 숫자를 받는 maxSubarraySum이라는 함수를 작성
* 이 함수는 배열에 있는 n 연속 요소의 최대 합계를 계산해야함.
* */

function maxSubarraySum(arr, num) {
    if(num > arr.length) {
        return null;
    }
    let max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for(let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)); // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)); // 17
console.log(maxSubarraySum([4,2,1,6],1)); // 6
console.log(maxSubarraySum([4,2,1,6,2],4)); // 13
console.log(maxSubarraySum([],4)); // null

// 시간 복잡도 - O(n^2)