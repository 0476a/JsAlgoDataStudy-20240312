
function findLongestSubstring(str) {
   let longest = 0; // 가장 긴 하위 문자열의 길이를 저장할 변수
   let seen = {};        // 문자의 인덱스를 저장할 객체
   let start = 0;   // 현재 하위 문자열의 시작 인덱스

   for(let i = 0; i < str.length; i++) {
       let char = str[i]; // 현재 문자를 저장

       if (seen[char]) {
           console.log(seen)
           // 현재 문자가 이전에 등장한 적이 있다면, start를 업데이트
           start = Math.max(start, seen[char]);
           console.log("start: ", start);
           console.log("seen[char]: ", seen[char]);
       }
       // 현재 하위 문자열의 길이를 계산하고, 가장 긴 길이와 비교하여 업데이트
       longest = Math.max(longest, i - start + 1);
       // 현재 문자의 다음 인덱스를 seen 객체에 저장 (다음 번에 중복 체크 시 사용)
       seen[char] = i + 1;
   }
   return longest;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1