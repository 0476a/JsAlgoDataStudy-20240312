/*
* 문제(빈도수 세기)
* sameFrequency라는 함수를 작성하세요.
* 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.
* */

function sameFrequency(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();
    if(num1.length !== num2.length) {
        return false;
    }
    const lookup = {};
    for(let i = 0; i < num1.length; i++) {
        let num = num1[i];
        lookup[num] ? lookup[num] += 1 : lookup[num] = 1;
    }

    for(let i = 0; i < num2.length; i++) {
        let num = num2[i];
        if(!lookup[num]) {
            return false;
        } else {
            lookup[num] -= 1;
        }
    }
    return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22,222)); // false