function validAnagram(first, second) {
    if(first.length !== second.length) {
        return false;
    }

    const lookup = {};
    // 베열에 있는 각 요소들의 빈도수를 체크해서 객체화 시킴.
    for(let i = 0 ; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup); // { a: 3, n: 1, g: 1, r: 1, m: 1, s: 1 }

    for(let i = 0; i < second.length; i++) {
        let letter = second[i];
        // 첫 번쨰 문자열에 해당 문자가 없으면 false == 값이 '0'이라면 false
        if(!lookup[letter]) {
            return false;
        } else {
            // 같은 값이 있으면 해당 문자의 카운트 -1
            lookup[letter] -= 1;
        }
    }
}

console.log(validAnagram('anagrams', 'nagaramm'));