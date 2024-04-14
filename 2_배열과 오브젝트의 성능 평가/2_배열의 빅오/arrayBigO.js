let locals1 = ["부산", "울산", "경주"];
let locals2 = ["광주", "여수", "전주"];

console.log(locals1.concat(locals2)); // O(n) -> 배열을 합쳐주는 메소드

let subjects = ["수학", "문학", "역사"]

console.log(subjects.slice(1)); // O(n) -> 인덱스 값을 넣으면 해당 인덱스가 빠진 상태 리스트가 나옴
console.log(subjects.splice(2)); // O(n) -> 인덱스 값을 넣으면 해당 범위에 있는 리스트만 나옴

let numbers = [3, 8, 7, 6, 4, 2, 5]
console.log(numbers.sort()); // O(n * log n) -> 배열의 값을 정렬시키는 메소드