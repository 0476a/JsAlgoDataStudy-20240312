function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    // 하나의 배열이라도 끝이나면 반복 종료
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    // 남은 값 배열에 추가
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

console.log(merge([100,200], [1,2,3,5,6]));