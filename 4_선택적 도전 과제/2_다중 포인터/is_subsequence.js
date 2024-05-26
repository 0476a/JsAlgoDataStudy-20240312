/*
* 문제(다중 포인터)
* 두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequnence라는 함수 작성
* 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야 함.
* */

function isSubsequence(str1, str2) {
    if(str1.length > str2.length) return false;
    let i = 0;
    for(let j = 0; j < str2.length; j++) {
        console.log(str1[i]);
        console.log(str2[j]);
        if(str1[i] === str2[j]) {
            i++;
        }
        if(str1.length === i) return true;
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)