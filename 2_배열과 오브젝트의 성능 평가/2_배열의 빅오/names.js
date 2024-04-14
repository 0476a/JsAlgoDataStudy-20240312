let names = ["김땡땡", "박땡땡", "이떙땡"];

// 추가 - O(n) || O(1)
// 제거 - O(n) || O(1)
// 검색 - O(n)
// 접근 - O(1)

names.push("최땡땡"); // O(1) -> 배열 가장 뒤에 값을 추가해주는 메소드
console.log(names);
names.pop(); // O(1) -> 배열 가장 뒤에 값을 제거해주는 메소드
console.log(names);
names.unshift("한땡떙"); // O(n) -> 배열 가장 앞에 값을 추가해주는 메소드
console.log(names);
names.shift(); // O(n) -> 배열 가장 앞에 값을 제거해주는 메소드
console.log(names);