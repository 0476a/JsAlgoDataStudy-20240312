/*
* 문제(아나그램)
* 아나그램: 말장난으로 어떠한 단어의 문자를 재배열하여 다른 뜻을 가지는 다른 단어로 바꾸는 것
* 두 개의 문자열이 주어지면 두 번째 문자열이 첫 번째 문자열의 철자법인지 확인하는 함수
* ex) 아이스맨(iceman), 시네마(cinema) => true
* */

function anagram(char1, char2) {
    if(char1.length !== char2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of char1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of char2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for(let key in frequencyCounter1) {
        if(!(key in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(anagram('', '')); //true
console.log(anagram('aaz', 'zza')); //false
console.log(anagram('anagram', 'nagaram')); //true
console.log(anagram('rat', 'car')); //false
console.log(anagram('awesome', 'awesom')); //false
console.log(anagram('qwerty', 'qeywrt')); //true
console.log(anagram('texttwisttime', 'timetwisttext')); //true