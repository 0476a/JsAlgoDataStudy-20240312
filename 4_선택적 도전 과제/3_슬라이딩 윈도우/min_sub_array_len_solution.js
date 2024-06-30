
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // 현재 창이 주어진 합계에 합산되지 않으면 창을 오른쪽으로 이동함.
        if(total < sum && end < nums.length) {
            total += nums[end];
            end++;
        }
        // 현재 창이 적어도 주어진 총합에 합산되면 우리는 창문을 줄일 수 있습니다.
        else if(total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        }
        // 현재 총계는 필요한 총계보다 적지만 우리는 끝에 도달했음.
        // break를 통해 while문 나감.
        else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2 -> [4,3]가 가장 작은 부분 배열이기 때문입니다
console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2 -> [5,4]가 가장 작은 부분 배열이기 때문입니다
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1 -> [62]는 52보다 크기 때문에
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)); // 3