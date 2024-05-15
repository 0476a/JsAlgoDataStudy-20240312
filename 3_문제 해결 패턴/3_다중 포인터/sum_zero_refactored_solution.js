function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    // 같은 값이 되었을 떄 방지를 위해 다음과 같이 작성됨.
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            // 더한 값이 0보다 크면 오른쪽이 하나씩 올겨와서 비교
            right--;
        } else {
            // 더한 값이 0보다 작으면 왼쪽에서 하나씩 옮겨와서 비교
            left++;
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined

/*
* 시간 복잡도 - O(n)
* 공간 복잡도 - O(1)
* */