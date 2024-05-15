let footballteams = ["Liverpool", "Tottenham", "Arsenal", "Manchester City", "Manchester United", "Chelsea"];

footballteams.forEach((team) => console.log(team)); // O(n) -> 리스트의 값을 하나씩 모두 꺼내서 반복돌려주는 메소드
/*
출력값:
Liverpool
Tottenham
Arsenal
Manchester City
Manchester United
Chelsea
*/

let formattedFootballTeams = footballteams.map(function (team){
    return team + "Team";
});

console.log(formattedFootballTeams); // O(n) -> 리스트의 값을 하나씩 모두 꺼내서 로직 처리를 해주는 메소드
/*
출력값:
[
  'LiverpoolTeam',
  'TottenhamTeam',
  'ArsenalTeam',
  'Manchester CityTeam',
  'Manchester UnitedTeam',
  'ChelseaTeam'
]
*/

// 여기서 forEach와 map의 차이는 forEach는 반환하는 값이 없고, map은 반환하는 값이 존재함.

let manchesterTeams = footballteams.filter((team) => team.indexOf("Manchester") === 0);

console.log(manchesterTeams); // O(n) -> 리스트에서 조건에 해당하는 값을 찾고 싶을 때 사용하는 메소드
// 출력값: [ 'Manchester City', 'Manchester United' ]