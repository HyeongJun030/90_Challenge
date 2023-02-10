// // 사용자로부터 최대 숫자를 입력하도록 입력창(prompt)를 만들고, 그 값을 변수 maxNum에 저장합니다.
// // '123가나다'와 같이 정수가 포함된 값과 '123'과 같이 문자 형식으로 작성된 숫자값도 받기 위해 parseInt()를 사용하여 정수형으로 변환합니다.
// let maxNum = parseInt(prompt('Enter maximum number'));

// // 사용자로부터 받아온 입력값이 유효한 값인지 확인하기 위한 구문을 만듭니다.
// // if문을 사용해도 되지만 몇번을 확인해야할지 모르기 때문에 while문을 이용합니다.
// while ( !maxNum ) {
//     maxNum = parseInt(prompt('Enter vaild number'));
// }

// // Math.random()을 사용하여 0.00...~0.999... 사이의 난수를 생성합니다. 그 수에 * 10을 하여 0.000...~9.999... 사이의 난수가 되도록 만듭니다.
// // Math.floor()를 사용하여 소수점을 내림하고, +1을 더하여 1부터 입력값까지의 정수 숫자만 출력하는 난수를 생성하도록 만듭니다.
// const answerNum = Math.floor(Math.random() * maxNum) + 1;
// console.log(answerNum);

// // 사용자가 추측하도록 구문을 만들고, 작거나 클 때 어떤 힌트를 줄 지 구문을 작성합니다.
// // 사용자가 입력하는 값은 문자열일테니 숫자값과 비교할 수 있도록 parseInt()로 받아옵니다.
// let guess = parseInt(prompt('Enter your first guess!'));
// while ( guess !== answerNum) {
//     if( guess > answerNum ) {
//         guess = parseInt(prompt('Too high! Enter new guess : '));
//     } else {
//         guess = parseInt(prompt('Too Low! Enter new guess : '));
//     }
// }
// console.log('You got it!')

// --------- 몇 번의 시도를 통해 맞췄는지 알아보기 ---------
// 사용자로부터 최대 숫자를 입력하도록 입력창(prompt)를 만들고, 그 값을 변수 maxNum에 저장합니다.
// '123가나다'와 같이 정수가 포함된 값과 '123'과 같이 문자 형식으로 작성된 숫자값도 받기 위해 parseInt()를 사용하여 정수형으로 변환합니다.
let maxNum = parseInt(prompt('Enter maximum number'));

// 사용자로부터 받아온 입력값이 유효한 값인지 확인하기 위한 구문을 만듭니다.
// if문을 사용해도 되지만 몇번을 확인해야할지 모르기 때문에 while문을 이용합니다.
while ( !maxNum ) {
    maxNum = parseInt(prompt('Enter vaild number'));
}

// Math.random()을 사용하여 0.00...~0.999... 사이의 난수를 생성합니다. 그 수에 * 10을 하여 0.000...~9.999... 사이의 난수가 되도록 만듭니다.
// Math.floor()를 사용하여 소수점을 내림하고, +1을 더하여 1부터 입력값까지의 정수 숫자만 출력하는 난수를 생성하도록 만듭니다.
const answerNum = Math.floor(Math.random() * maxNum) + 1;


// 사용자가 추측하도록 구문을 만들고, 작거나 클 때 어떤 힌트를 줄 지 구문을 작성합니다.
// 사용자가 입력하는 값은 문자열일테니 숫자값과 비교할 수 있도록 parseInt()로 받아옵니다.
let guess = parseInt(prompt('Enter your first guess!'));

// 몇번의 시도를 통해 정답을 맞췄는지 확인하기 위해 횟수를 추가합니다.
let attempts = 1;


while ( guess !== answerNum) {
    // 몇번 시도 했는지 루프에 들어올 때마다 +1을 증가시켜 시도 횟수를 알 수 있습니다.
    attempts++;
    if( guess > answerNum ) {
        guess = parseInt(prompt('Too high! Enter new guess : '));
    } else {
        guess = parseInt(prompt('Too Low! Enter new guess : '));
    }
}
// 시도 횟수를 함께 보여주기 위해 문자열 탬플릿으로 작성합니다.
console.log(`You got it! It took you ${attempts} guesses`);