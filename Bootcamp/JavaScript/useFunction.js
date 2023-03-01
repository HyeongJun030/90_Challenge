// 함수 사용하기
// function greet() {
//     console.log('안녕하세요.');
//     console.log('Hello.');
//     console.log('잘가.');
//     console.log('Bye.');
//     console.log('오랜만이야.');
//     console.log('Long time no see.');
// }

// 인수 값이 있는 함수 정의하기
// function greet(name) {
//     console.log(`안녕하세요. ${name} `);
//     console.log(`Hello. ${name}`);
//     console.log(`잘가. ${name}`);
// }

// 여러 인수값을 사용하는 함수 정의하기
// function greet(firstName, lastName) {
//     console.log(`안녕하세요. ${firstName} ${lastName} `);
//     console.log(`Hello. ${firstName} ${lastName}`);
//     console.log(`잘가. ${firstName} ${lastName}`);
// }

// console.log 와 return 의 차이 : console.log는 캡처하거나 재사용할 수 있는 출력값이 아니다. return은 가능 !
// function add(x, y) {
//     console.log(x + y);
// }
// function add(x, y) {
//     console.log(x + y);
//     console.log('console.log 사용 시 해당 구문은 출력됩니다.');
// }
function add(x, y) {
    return(x + y);
    console.log('return 사용 시 해당 구문은 출력되지 않습니다.');
}