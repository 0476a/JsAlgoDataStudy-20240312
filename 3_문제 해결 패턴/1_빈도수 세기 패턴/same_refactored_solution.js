// 리팩토링 한 버전

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    // 베열에 있는 각 요소들의 빈도수를 체크해서 객체화 시킴.
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1); // { '1': 1, '2': 2, '3': 1, '5': 1 }
    console.log(frequencyCounter2); // { '1': 1, '4': 2, '9': 1, '11': 1 }
    for(let key in frequencyCounter1){
        // frequencyCounter1의 각 키의 제곱값이 frequencyCounter2에 있는지 확인하고 없으면 false 반환
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // 키 값이 같을 경우, 빈도 수가 같은지 확인하고 다르다면 false 반환
        if(frequencyCounter2[key **2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(same([1,2,3,2,5], [9,1,4,4,11]));