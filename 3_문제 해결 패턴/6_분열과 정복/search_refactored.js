function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if(arr[middle] < val) {
            min = middle + 1;
        } else if(arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

console.log(search([1,2,3,5,6,8,9,12,15,16,29], 9)); // 6

// 시간복잡도 Log(n) -> 이진 검색