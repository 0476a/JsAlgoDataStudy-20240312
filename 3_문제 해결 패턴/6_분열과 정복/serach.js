/*
* 문제(슬라이딩 윈도우)
* 정렬된 정수 배열이 주어지면 검색이라는 함수를 작성
* 이 함수는 값을 받아 함수에 전달된 값이 있는 인덱스를 반환함.
* 값을 찾을 수 없다면 -1을 반환
* */

function search(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}

console.log(search([1,2,3,5,6,8,9,12,15,16,29], 9)); // 6

// 시간복잡도 O(n)