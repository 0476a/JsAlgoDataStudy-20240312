let instructor= {
    firstName: "Kelly",
    isInstructor : true,
    favoriteNumbers: [1,2,3,4]
}

// 입력 - O(1)
// 삭제 - O(1)
// 검색 - O(n)
// 접근 - O(1)

console.log(Object.keys(instructor)); // O(n) -> 키를 추출해주는 메소드
console.log(Object.values(instructor)); // O(n) -> 값을 추출하는 메소드
console.log(Object.entries(instructor)); // O(n) -> 키와 값을 추출해주는 메소드
console.log(instructor.hasOwnProperty("firstName")); // O(1) -> 속성값이 존재하는지 찾아주는 메소드
