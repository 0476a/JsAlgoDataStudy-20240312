/*
* O(1) 공간이 아닌 재귀
* */

function isSubsequence(str1, str2) {
    if(str1.length === 0) return true;
    if(str2.length === 0) return false;
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
    return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence("abc", "aebdc")); // true
/*
* 풀이
* 1. 'a'일치, 재귀 호출 : isSubsequence("bc", "ebdc")
* 2. 'b'불일치, str2 첫 문자 제거 : isSubsequence("bc", "bdc")
* 3. 'b'일치, 재귀 호출 : isSubsequence("c", "dc")
* 4. 'c'불일치, str2 첫 문자 제거 : isSubsequence("c", "c")
* 5. 'c'일치, 재귀 호출 : isSubsequence("", "")
* 6. str1.length가 0이므로 true 반환 -> str2.length === 0 보다 위에 있어서 true 반환
* */

console.log(isSubsequence("abc", "acb")); // false
/*
* 풀이
* 1. 'a'일치, 재귀 호출 : isSubsequence("bc", "cb")
* 2. 'b'불일치, str2 첫 문자 제거 : isSubsequence("bc", "b")
* 3. 'b'일치, 재귀 호출 : isSubsequence("c", "")
* 4. str2.length가 0이므로 false 반환
* */