// // 디폴트 매개변수 
// function dice(num = 6) {   // 매개변수 자리에 기본 값을 주어 인수를 입력하지 않았을 때는 num 이 6인 결과를 출력합니다.
//     return Math.floor(Math.random() * num) + 1;
// }

// 기본 값이 있는 매개변수 msg 를 기본 값이 없는 매개변수 person 뒤에 위치시킵니다.
function greet(person, msg = "Hey there") {
    console.log(`${msg}, ${person}!`)
}