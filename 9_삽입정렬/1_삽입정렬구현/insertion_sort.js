function insertionSort(arr) {
    let currentVal;
    for(let i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        let j;
        for(j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4])); // 출력 : [ 1, 2, 4, 9, 76 ]