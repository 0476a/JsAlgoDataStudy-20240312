/*
* 반복을 활용한 해결법
* while문을 활용하여 문제를 해결함.
* */

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if(!str1) return true;
    while(j < str2.length) {
        if(str2[j] === str1[i]) i++;
        if(i === str1.length) return true;
        j++;
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)