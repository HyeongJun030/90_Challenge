const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

// // 어떤 이벤트를 줄 것인지 결정합니다.
// btn1.onclick = function() {
//     console.log('이 버튼을 클릭하였습니다.');
//     console.log('버튼이 동작합니다.');
// }

// function help() {
//     console.log('살려줘!!!!!!')
//     console.log('도와주세요!!!!!!')
// }

// btn1.onmouseenter = help;

btn1.addEventListener('click', function () {
    console.log('버튼을 클릭하였습니다. - 1')
})

btn1.addEventListener('click', function () {
    console.log('버튼을 클릭하였습니다. - 2')
})

btn2.onclick = function() {
    console.log('onclick 버튼 - 1')
}

btn2.onclick = function() {
    console.log('onclick 버튼 - 2')
}