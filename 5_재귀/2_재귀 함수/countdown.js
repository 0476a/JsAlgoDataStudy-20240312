// 재귀 함수
function countDown(num) {
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(3);

// 반복 함수
// function countDown(num){
//     for(var i = num; i > 0; i--){
//         console.log(i);
//     }
//     console.log("All done!")
// }