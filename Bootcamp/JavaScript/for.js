// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for ( let i = 1; i <= 10; i++ ) {
//     console.log(i);
// }

// // 0부터 20까지의 숫자 중 홀수만 출력하는 for 문
// for ( let j = 1; j <= 20; j += 2) {
//     console.log(j);
// }

// // 0부터 20까지 짝수만 출력하는 for 문
// for ( let i = 0; i <= 20; i += 2 ) {
// 	console.log(i);
// }

// // 100에서 0까지 -10씩 줄어드는 for문
// for ( let i = 100; i >= 0; i -= 10) {
// 	console.log(i);
// }

// // 중첩 for문
// for ( let i = 1; i <= 10; i += 1 ) {
// 	console.log(`i is : ${i}`);
//     for ( let j = 1; j <= 5; j += 1 ) {
//     	console.log(`     j is : ${j}`);
//     }
// }

// // while 문
// let count = 0;
// while ( count < 10 ) {
//     count++;
//     console.log(count);
// }

// while 문으로 질문 구문 만들기
// const secretWord = 'JavaScript';

// let guess = prompt('Enter the secret code.');
// while ( guess !== secretWord ) {   // 미리 정해놓은 답변인 secretWord 변수와 사용자가 입력한 guess 변수가 같지 않다면
// 	guess = prompt('Enter the secret code.');   // 다시 입력하도록 반복문을 돌립니다.
// }
// console.log('Good!');

// while - break 문
for ( let i = 0; i < 100; i++ ) {
    console.log(i);
    if ( i === 10 ) {   // 만약 i 가 10과 같다면 
        break;   // 반복문을 중지해라(break)
    }
}