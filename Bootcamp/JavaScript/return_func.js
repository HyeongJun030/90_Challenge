// 반환 함수 연습 1
// function makeMysteryFunc() {
//     // 임의의 숫자를 구하기 위해 변수를 선언합니다.
//     const rand = Math.random();
//     // rand 가 0.5보다 큰지 확인합니다.
//     if(rand > 0.5) {
//         return function() {
//             console.log('0.5보다 큽니다.');
//         }
//     } else {
//         return function() {
//             alert('0.5보다 작거나 같습니다.');
//         }
//     }
// }

// 반환 함수 연습 2 - 팩토리 함수
function betweenAdult(min, max) {
    return function (age) {
        return age >= min && age <= max;
    }
}