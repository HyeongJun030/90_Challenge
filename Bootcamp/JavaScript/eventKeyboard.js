// document.querySelector('button').addEventListener('click', function () {
//     alert('click');
// })

// const input = document.querySelector('input');
// input.addEventListener('keydown', function () {  
//     console.log('KEYDOWN');
// })

// input.addEventListener('keyup', function () {
//     console.log('KEYUP');
// })

// 어떤 키를 입력하였는지 확인하는 방법 = 매개변수를 집어넣는다 ! ----------------------------------------
document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

const input = document.querySelector('input');
input.addEventListener('keydown', function (e) {   // 어떤 키를 눌렀는지 확인하기 위해 매개변수를 입력합니다.  
    console.log(e);   // 입력된 매개변수를 출력합니다.
    console.log(e.key);
    console.log(e.code);
})

