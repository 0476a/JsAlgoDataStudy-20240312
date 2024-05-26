/*
* One Liner 솔루션
* arguments를 Set에 생성하여 반복되는 녀석들을 빼서 넣어줌.
* 중복이 있으면 당연히 인자의 배열 크기보다 작으니 false 반환
* */

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 3, 2, 2)); // true