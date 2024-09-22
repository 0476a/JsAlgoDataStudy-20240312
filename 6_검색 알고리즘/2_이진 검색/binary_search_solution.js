/*
* 이진 검색
* 문제
* 정렬된 배열과 값을 받아들이고 값이 존재하는 경우 그 인덱스를 반환하는 binarySearch라는 함수를 작성합니다.
* 값이 존재하지 않으면 -1을 반환합니다.
* */

function binarySearch(arr, elem){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] == elem) {
        return middle;
    }
    return -1;
}


console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30],15)); // 5