/*
* 이진 검색
* 문제
* 정렬된 배열과 값을 받아들이고 값이 존재하는 경우 그 인덱스를 반환하는 binarySearch라는 함수를 작성합니다.
* 값이 존재하지 않으면 -1을 반환합니다.
* */

function binarySearch(arr, num){
    let lIdx = 0;
    let rIdx = arr.length;
    let cIdx = Math.floor(arr.length / 2);

    for(let i = 0; i < arr.length; i++ ) {
        if(arr[cIdx] === num) {
            return cIdx
        } else if (arr[cIdx] < num){
            lIdx = cIdx;
        } else {
            rIdx = cIdx;
        }

        cIdx = Math.floor((lIdx + rIdx) / 2);
    }

    return -1;
}


console.log(binarySearch([1,2,3,4,5],2)); // 1
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],6)); // -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)); // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)); // 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)); // -1