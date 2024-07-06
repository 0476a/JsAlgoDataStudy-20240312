/*
* 선형 검색
* 문제
* 배열과 값을 받아들이고 그 값이 배열 안에 존재하는 경우 그 인덱스를 반환하는 linearSearch 함수 작성
*  값이 배열에 존재하지 않는 경우 -1 반환
* */
function linearSearch(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === num) return i;
    }

    return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1,2,3,4,5], 6)); // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
console.log(linearSearch([100], 200)); // -1

// 솔루션도 다음과 같아서 굳이 구현 X

