function callFunction(func) {   // 매개변수 func 의 인수 값으로 함수를 받아오는 callFunction 라는 함수를 만듭니다.
    func();   // callFunction() 이라는 함수를 실행할 경우 매개변수 func() 에 해당하는 값을 두번 실행합니다.
    func();
}

function number() {   // number() 라는 함수를 정의합니다.
    console.log(2023);   // number() 라는 함수가 실행될 때 2023 이라는 숫자 값을 출력합니다.
}

// callFunction() 라는 함수를 실행할 때 매개변수 func 의 인수 값으로 number 라는 함수를 저장하여 출력합니다.
callFunction(number);   