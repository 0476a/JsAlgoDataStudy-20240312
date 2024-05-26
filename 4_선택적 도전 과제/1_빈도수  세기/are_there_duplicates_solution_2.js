/*
* 다중포인트 방식의 해결법
* args.sort를 사용하여 오름차순으로 받은 데이터를 정렬 시켜줌.
* */

function areThereDuplicates(...args) {
    // 투 포인트
    args.sort((a, b) => a - b); // 오름차순 정렬
    let start = 0;
    let next = 1;
    while(next < args.length) {
        if(args[start] === args[next]){
            return true;
        }
        start++;
        next++;
    }
    return false;
}

console.log(areThereDuplicates(1, 3, 2, 2)); // true